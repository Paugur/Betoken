import torch
import gensim
from nltk.tokenize import sent_tokenize, RegexpTokenizer
from nltk.corpus import stopwords
from spacy.lang.en.stop_words import STOP_WORDS
import re
import spacy
from gensim.models import Word2Vec
import os
import os.path



class Pipeline:

    def __init__(self):
        remove_words = set(stopwords.words('english')).union(STOP_WORDS)
        self.nlp = spacy.load('en', disable=['parser', 'tagger', 'ner'])
        needed = {'have',
                  'has',
                  'had',
                  'having',
                  'do',
                  'does',
                  'did',
                  'doing',
                  'and',
                  'but',
                  'if',
                  'or',
                  'against',
                  'up',
                  'down',
                  'out',
                  'on',
                  'off',
                  'over',
                  'no',
                  'nor',
                  'not',
                  'can',
                  'will',
                  'don',
                  "don't",
                  'should',
                  "should've",
                  'ain',
                  'aren',
                  "aren't",
                  'couldn',
                  "couldn't",
                  'didn',
                  "didn't",
                  'doesn',
                  "doesn't",
                  'hadn',
                  "hadn't",
                  'hasn',
                  "hasn't",
                  'haven',
                  "haven't",
                  'isn',
                  "isn't",
                  'mustn',
                  "mustn't",
                  'shan',
                  "shan't",
                  'shouldn',
                  "shouldn't",
                  'wasn',
                  "wasn't",
                  'weren',
                  "weren't",
                  'won',
                  "won't",
                  'wouldn',
                  "wouldn't",
                  'less',
                  'bottom',
                  'top',
                  'least',
                  }
        self.stopwords = remove_words - needed
        dr = os.getcwd()
        fle = os.path.join(dr,'models','word2vec.model')
        fullpath=os.path.expanduser(fle)
        word_vectorizer = Word2Vec.load(fullpath)
        self.embedding_model = word_vectorizer.wv
        self.padding = len(self.embedding_model.index2word)
        self.embedding_weights = torch.Tensor(self.embedding_model.vectors)
        del word_vectorizer

    def remove_unwanted(self, the_string):
        lower_string = the_string.lower()
        tokenizer = RegexpTokenizer("\w+\'?\w+|\w+'")
        Tweet = re.sub('@[^\s]+', '', lower_string)
        result = re.sub(r"http\S+", "", Tweet)
        return tokenizer.tokenize(result)

    def remove_stopwords(self, review_tokens):
        token_list = []
        for token in review_tokens:
            if token not in self.stopwords:
                token_list.append(token)
        return token_list

    def lemmat(self, review_tokens):
        lemma_result = []
        for words in review_tokens:
            doc = self.nlp(words)
            for token in doc:
                lemma_result.append(token.lemma_)
        return lemma_result

    def word2idx(self, review):
        index_review = []
        for word in review:
            try:
                index_review.append(self.embedding_model.vocab[word].index)
            except:
                pass
        return torch.tensor(index_review)


if __name__ == '__main__':
    test_string = "@switchfoot http://twitpic.com/2y1zl - Awww, that's a bummer.  You shoulda got David Carr of Third Day to do it. ;D"
    pipe = Pipeline()
    cleaned_string = pipe.remove_unwanted(test_string)
    no_stop = pipe.remove_stopwords(cleaned_string)
    lemma = pipe.lemmat(no_stop)
    tensor = pipe.word2idx(lemma)

    print(lemma)
    print(tensor)
