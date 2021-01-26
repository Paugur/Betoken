import torch
import gensim
from nltk.tokenize import sent_tokenize, RegexpTokenizer
from nltk.corpus import stopwords
from spacy.lang.en.stop_words import STOP_WORDS
import re
import spacy
from gensim.models import Word2Vec

stopwords = set(stopwords.words('english')).union(STOP_WORDS)

nlp = spacy.load('en', disable=['parser', 'tagger', 'ner'])

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

stopwords = stopwords - needed

word_vectorizer = Word2Vec.load("./word2vec.model")
embedding_model = word_vectorizer.wv
del word_vectorizer



def remove_unwanted(the_string):
    lower_string = the_string.lower()
    tokenizer = RegexpTokenizer("\w+\'?\w+|\w+'")
    Tweet = re.sub('@[^\s]+', '', lower_string)
    result = re.sub(r"http\S+", "", Tweet)
    return tokenizer.tokenize(result)


def remove_stopwords(review):
    token_list = []
    for token in review:
        if token not in stopwords:
            token_list.append(token)
    return token_list

def lemmat(review):
    lemma_result = []
    for words in review:
        doc = nlp(words)
        for token in doc:
            lemma_result.append(token.lemma_)
    return lemma_result

def word2idx(review):
    index_review = []
    for word in review:
        try:
            index_review.append(embedding_model.vocab[word].index)
        except:
            pass
    return torch.tensor(index_review)


if __name__ == '__main__':
    test_string = "@switchfoot http://twitpic.com/2y1zl - Awww, that's a bummer.  You shoulda got David Carr of Third Day to do it. ;D"
    cleaned_string = remove_unwanted(test_string)
    no_stop = remove_stopwords(cleaned_string)
    lemma = lemmat(no_stop)
    tensor = word2idx(lemma)

    print(lemma)
    print(tensor)

