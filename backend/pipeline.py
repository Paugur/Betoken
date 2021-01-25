import pandas as pd
from nltk.tokenize import sent_tokenize, RegexpTokenizer
from nltk.corpus import stopwords
from spacy.lang.en.stop_words import STOP_WORDS
import re
import spacy

data_df = pd.read_csv('D:/pytorch_practice/sentiment_data/all_data.csv', header = None)

def remove_unwanted(the_string):
    lower_string = the_string.lower()
    tokenizer = RegexpTokenizer("\w+\'?\w+|\w+'")
    Tweet = re.sub('@[^\s]+','',lower_string)
    result = re.sub(r"http\S+", "", Tweet)
    return tokenizer.tokenize(result)

data_df[8] = data_df[5].apply(remove_unwanted)

stopwords = set(stopwords.words('english')).union(STOP_WORDS)

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

def remove_stopwords(review):
    return [token for token in review if token not in stopwords]


data_df[9] = data_df[8].apply(remove_stopwords)

nlp = spacy.load('en', disable =['parser', 'tagger', 'ner'])

doc = nlp("isn't")
for token in doc:
    print(token.lemma_)

def lemmatization(review):
    lemma_result = []
    for words in review:
        doc = nlp(words)
        for token in doc:
            lemma_result.append(token.lemma_)
    return lemma_result

data_df[10] = data_df[9].apply(lemmatization)

data_df.to_csv("D:/pytorch_practice/sentiment_data/lemma_data.csv", header=None, index=None)

