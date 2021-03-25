from Sentinet import RNN
import torch
import torch.nn as nn
import torch.optim as optim
from TextPipeLine import TextPipeLine as tpl

class SentiGetter():

    def __init__(self):
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

        model_data = torch.load('D:/PAUGUR/backend/Youtube/AmazonModels/senimentModelandOptim', map_location=self._device)

        self._model.load_state_dict(model_data['LSTM'])

    def get_predictions(self, vector):
        self._model.eval()
        with torch.no_grad():
            tens = torch.LongTensor(vector).to(self._device)
            tens = tens.unsqueeze(1)
            predictions = self._model(tens, torch.LongTensor([len(vector)]))
            return predictions

if __name__ == '__main__':

    theString = "omg dont use vim just use fing notepad++ or visual studios dont need to crap out a fing kidney stone you forgot how to save a file."
    pipe = tpl()
    the_list = pipe.remove_unwanted(theString)
    print(the_list)
    vect = pipe._word2idx(the_list)
    print(vect)

    geter = SentiGetter()

    print(geter.get_predictions(vect))
