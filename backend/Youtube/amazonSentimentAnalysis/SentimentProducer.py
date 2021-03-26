from backend.Youtube.amazonSentimentAnalysis.Sentinet import RNN
import torch
import torch.nn as nn
import torch.optim as optim
from backend.Youtube.amazonSentimentAnalysis.TextPipeLine import TextPipeLine as tpl
import os

class SentiGetter():

    def __init__(self):
        dr = os.getcwd()
        fle = os.path.join(dr,'Youtube','AmazonModels','senimentModelandOptim')
        self._device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self._tpl = tpl()
        INPUT_DIM = len(self._tpl.get_word_vectors().index2word)
        EMBEDDING_DIM = 128
        HIDDEN_DIM = 256
        OUTPUT_DIM = 3
        N_LAYERS = 2
        BIDIRECTIONAL = True
        DROPOUT = 0.5
        EMBEDDING_WEIGHTS = torch.Tensor(self._tpl.get_word_vectors().vectors)

        self._model = RNN(INPUT_DIM, EMBEDDING_DIM, HIDDEN_DIM, OUTPUT_DIM, N_LAYERS, BIDIRECTIONAL, DROPOUT, EMBEDDING_WEIGHTS).to(self._device)

        model_data = torch.load(fle, map_location=self._device)

        self._model.load_state_dict(model_data['LSTM'])

    def get_predictions(self, vector):
        sentiment_dict = {}
        try:
            self._model.eval()
            with torch.no_grad():
                tens = torch.LongTensor(vector).to(self._device)
                tens = tens.unsqueeze(1)
                predictions = self._model(tens, torch.LongTensor([len(vector)]))
                sentiment_dict.update({"NEU":predictions.tolist()[0]})
                sentiment_dict.update({"POS":predictions.tolist()[1]})
                sentiment_dict.update({"NEG":predictions.tolist()[2]})
                return sentiment_dict
        except Exception as e:
            sentiment_dict.update({"NEU":0.0})
            sentiment_dict.update({"POS":0.0})
            sentiment_dict.update({"NEG":0.0})
            return sentiment_dict

if __name__ == '__main__':

    # theString = "omg dont use vim just use fing notepad++ or visual studios dont need to crap out a fing kidney stone you forgot how to save a file."
    # pipe = tpl()
    # the_list = pipe.remove_unwanted(theString)
    # print(the_list)
    # vect = pipe._word2idx(the_list)
    # print(vect)
    #
    # geter = SentiGetter()
    #
    # print(geter.get_predictions(vect))
