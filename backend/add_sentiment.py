import torch
import torch.nn as nn
import torch.optim as optim
from CommentPipeline import Pipeline
from RecurrentNeuralNetwork import RNN


class Sentitron:

    def __init__(self):
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
        rnn_state_dict = torch.load('./sentiment')
        self.rnn.load_state_dict(rnn_state_dict)

    def get_sentiment(self, comment_string):
        self.rnn.eval()
        cleaned_string = self.pipe_line.remove_unwanted(comment_string)
        no_stop = self.pipe_line.remove_stopwords(cleaned_string)
        lemma = self.pipe_line.lemmat(no_stop)
        pipe_tensor = self.pipe_line.word2idx(lemma)

        tensor = torch.LongTensor(pipe_tensor)
        tensor = tensor.unsqueeze(1)

        output = self.rnn(tensor, torch.LongTensor([len(pipe_tensor)]))
        print(output)

        senti = torch.sigmoid(output)
        return senti.item()




if __name__ == '__main__':
    sentiment = Sentitron()
    comment = "I never realized how attached to Felix’s face I was until now "
    print(comment)
    feeling = sentiment.get_sentiment(comment)
    print(feeling)