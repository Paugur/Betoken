import pandas as pd
import gensim
from gensim.models import Word2Vec
import ast

df = pd.read_csv("D:/pytorch_practice/sentiment_data/lemma_data.csv", header=None)

embedding_dimension = 128

sent_list = []
for i in df[10]:
    sent_list.append(ast.literal_eval(i))

model = Word2Vec(sent_list, size = embedding_dimension, window = 3, min_count = 3, workers = 4)
#mode = Word2Vec(sentences = sent_list, size = embedding_dimension, window = 1, min_count = 1, workers = 4)

word_vectors = model.wv



del model





import torch
import torch.nn as nn
import torch.optim as optim 
SEED = 2222





torch.manual_seed(SEED)
torch.cuda.manual_seed(SEED)
torch.backends.cudnn.deterministic = True

def word2idx(embedding_model, review):
    index_review = []
    for word in review:
        try:
            index_review.append(embedding_model.vocab[word].index)
        except:
            pass
    return torch.tensor(index_review)

padding_value = len(word_vectors.index2word)

def vector_list_maker(review_list):
    index_review = []
    drop_list = []
    count = 0
    for i in review_list:
        holder = word2idx(word_vectors, i)
        if(len(holder)) == 0:
            drop_list.append(count)
        else:
            index_review.append(holder)
        count+=1
    return index_review, drop_list

index_review, drop_list = vector_list_maker(sent_list)

df = df.drop(drop_list)
df = df.reset_index(drop=True)

embedding_weights = torch.Tensor(word_vectors.vectors)

class RNN(nn.Module):
    
    def __init__(self, input_dim, embedding_dim, hidden_dim, output_dim, n_layers, bidirectional, dropout, embedding_weights):
        super().__init__()
        self.embedding = nn.Embedding.from_pretrained(embedding_weights)
        #self.rnn = nn.RNN(embedding_dim, hidden_dim)
        self.rnn = nn.LSTM(embedding_dim, hidden_dim, num_layers = n_layers, bidirectional = bidirectional, dropout=dropout)
        self.fc = nn.Linear(hidden_dim*2, output_dim)
        self.dropout = nn.Dropout(dropout)
        
    def forward(self, x, text_lengths):
        embedded = self.embedding(x)
        packed_embedded = nn.utils.rnn.pack_padded_sequence(embedded, text_lengths)
        packed_output, (hidden, cell) = self.rnn(packed_embedded)
        hidden = self.dropout(torch.cat((hidden[-2,:,:], hidden[-1,:,:]), dim = 1))
        return self.fc(hidden.squeeze(0))


INPUT_DIM = padding_value
EMBEDDING_DIM = 128
HIDDEN_DIM = 256
OUTPUT_DIM = 1
N_LAYERS = 2
BIDIRECTIONAL = True
DROPOUT = 0.5

model = RNN(INPUT_DIM, EMBEDDING_DIM, HIDDEN_DIM, OUTPUT_DIM, N_LAYERS, BIDIRECTIONAL, DROPOUT, embedding_weights)

optimizer = optim.Adam(model.parameters())

criterion = nn.BCEWithLogitsLoss()

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

from sklearn.model_selection import train_test_split

labels = df[7].values


X_train, X_test, Y_train, Y_test = train_test_split(index_review, labels, test_size=0.2)


X_train, X_val, Y_train, Y_val = train_test_split(X_train, Y_train, test_size = 0.2)


batch_size = 64

import numpy as np

def iterator_func(X,y):
    size = len(X)
    permutation = np.random.permutation(size)
    iterator = []
    for i in range(0, size, batch_size):
        indices = permutation[i:i+batch_size]
        batch = {}
        batch['text'] = [X[i] for i in indices]
        batch["label"] = [y[i] for i in indices]
        
        batch["text"], batch["label"] = zip(*sorted(zip(batch["text"], batch["label"]), key=lambda x: len(x[0]), reverse = True ))
        #batch['length'] = [len(review) for review in batch["text"]]
        batch['length'] = []
        for i in batch['text']:
            batch['length'].append(len(i))
            if(len(i))==0:
                print(len(i))
                
        batch['length'] = torch.IntTensor(batch["length"])
        batch['text'] = torch.nn.utils.rnn.pad_sequence(batch["text"], batch_first=True).t()
        batch["label"] = torch.Tensor(batch["label"])
        
        batch["label"] = batch["label"].to(device)
        #batch["length"] = batch["length"].to(device)
        batch["length"] = batch["length"]
        batch["text"] = batch["text"].to(device)
        
        iterator.append(batch)
        
    return iterator 


train_iterator = iterator_func(X_train, Y_train)
test_iterator = iterator_func(X_test, Y_test)
val_iterator = iterator_func(X_val, Y_val)


zero_ct = 0
for i in (train_iterator):
    for j in i["length"]:
        if j.item() == 0:
            zero_ct+=1  

model = model.to(device)
criterion = criterion.to(device)

def binary_accuracy(preds, y):
    rounded_preds = torch.round(torch.sigmoid(preds))
    correct = (rounded_preds == y).float()
    acc = correct.sum()/len(correct)
    return acc


def train(model, iterator, optimizer, criterion):
    epoch_loss = 0
    epoch_acc = 0
    model.train()
    
    for batch in iterator:
        optimizer.zero_grad()
        predictions = model(batch["text"], batch["length"]).squeeze(1)
        loss = criterion(predictions, batch["label"])
        acc = binary_accuracy(predictions, batch["label"])
        loss.backward()
        optimizer.step()
        epoch_loss += loss.item()
        epoch_acc += acc.item()
        
    return epoch_loss / len(iterator), epoch_acc / len(iterator)


def evaluate(model, iterator, criterion):
    epoch_loss = 0
    epoch_acc = 0
    model.eval()
    with torch.no_grad():
        for batch in iterator:
            predictions = model(batch["text"], batch["length"]).squeeze(1)
            loss = criterion(predictions, batch["label"])
            acc = binary_accuracy(predictions, batch["label"])
            
            epoch_loss += loss.item()
            epoch_acc += acc.item()
        
    return epoch_loss / len(iterator), epoch_acc / len(iterator)


N_EPOCHS = 4


for epoch in range(N_EPOCHS):
    train_loss, train_acc = train(model, train_iterator, optimizer, criterion)
    valid_loss, valid_acc = evaluate(model, val_iterator, criterion)
    
    print('epoch', epoch)
    print('tl', train_loss)
    print('ta', 100 * train_acc)
    print('vl', valid_loss)
    print('va', 100 * valid_acc)
