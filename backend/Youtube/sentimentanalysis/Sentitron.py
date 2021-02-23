import torch
import torch.nn as nn
import torch.optim as optim
from backend.Youtube.sentimentanalysis.CommentPipeline import Pipeline
from backend.Youtube.sentimentanalysis.RecurrentNeuralNetwork import RNN
import os
import os.path

class Sentitron:

    def __init__(self):
        if torch.cuda.is_available():
            self.device = 'cuda'
        else:
            self.device = 'cpu'

        self.pipe_line = Pipeline()
        INPUT_DIM = self.pipe_line.padding
        EMBEDDING_DIM = 128
        HIDDEN_DIM = 256
        OUTPUT_DIM = 1
        N_LAYERS = 2
        BIDIRECTIONAL = True
        DROPOUT = 0.5
        self.rnn = RNN(INPUT_DIM, EMBEDDING_DIM, HIDDEN_DIM, OUTPUT_DIM, N_LAYERS, BIDIRECTIONAL, DROPOUT,
                       self.pipe_line.embedding_weights)
        dr = os.getcwd()
        #dr = os.path.normpath(os.getcwd() + os.sep + os.pardir)
        fle = os.path.join(dr,'Youtube', 'models', 'sentiment')
        fullpath = os.path.expanduser(fle)
        rnn_state_dict = torch.load(fullpath, map_location=torch.device('cpu'))
        self.rnn.load_state_dict(rnn_state_dict)
        self.rnn.to(self.device)

    def get_sentiment(self, comment_string):
        try:
            self.rnn.eval()
            cleaned_string = self.pipe_line.remove_unwanted(comment_string)
            no_stop = self.pipe_line.remove_stopwords(cleaned_string)
            lemma = self.pipe_line.lemmat(no_stop)
            pipe_tensor = self.pipe_line.word2idx(lemma)

            tensor = torch.LongTensor(pipe_tensor).to(self.device)
            tensor = tensor.unsqueeze(1)

            senti = torch.sigmoid(self.rnn(tensor, torch.LongTensor([len(pipe_tensor)]).to('cpu')))
            return senti.item() - 0.5
        except Exception as e:
            return 0.0




if __name__ == '__main__':
    sentiment = Sentitron()
    comment1 = "I hate you"
    print(comment1)
    feeling1 = sentiment.get_sentiment(comment1)
    #feeling2 = sentiment.get_sentiment(comment1)

    print(feeling1)#, feeling2)
