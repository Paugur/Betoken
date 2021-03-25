#import pandas as pd
import torch
import gensim
from gensim.models import Word2Vec
from nltk.tokenize import sent_tokenize, RegexpTokenizer
from nltk.corpus import stopwords
from spacy.lang.en.stop_words import STOP_WORDS
import re
import spacy

class TextPipeLine():

    def __init__(self):
        model = Word2Vec.load("D:/PAUGUR/backend/Youtube/AmazonModels/AmazonDataWordVectoriz.model")
        self._word_vectors = model.wv
        del model
        stop_words = set(stopwords.words('english')).union(STOP_WORDS)
        self._nlp = spacy.load('en', disable =['parser', 'tagger', 'ner'])
        needed = set()
        with open('D:/PAUGUR/backend/Youtube/AmazonModels/needed.txt', 'r') as file:
            for x in file.readlines():
                needed.update({x.strip('\n')})
        self._stopwords = stop_words - needed

    def remove_unwanted(self, the_string):
        lower_string = the_string.lower()
        tokenizer = RegexpTokenizer("\w+\'?\w+|\w+'")
        Tweet = re.sub('@[^\s]+','',lower_string)
        result = re.sub(r"http\S+", "", Tweet)
        tok = tokenizer.tokenize(result)
        edited_result = [token for token in tok if token not in self.get_stopwords()]
        lemma_result = []
        for words in edited_result:
            doc = self.get_nlp()(words)
            for token in doc:
                lemma_result.append(token.lemma_)
        return lemma_result

    def _word2idx(self, review):
        index_review = []
        for word in review:
            try:
                index_review.append(self._word_vectors.vocab[word].index)
            except:
                pass
        return torch.tensor(index_review)

    def get_stopwords(self):
        return self._stopwords

    def get_nlp(self):
        return self._nlp

    def get_word_vectors(self):
        return self._word_vectors

if __name__ == '__main__':
    theString = "Hello world, I am doing nothing"

    pipe = TextPipeLine()
    the_list = pipe.remove_unwanted(theString)
    print(the_list)
    vect = pipe._word2idx(the_list)
    print(vect)

    print(pipe.get_word_vectors())
