import ssl
from flask_pymongo import PyMongo
import pymongo
import configparser
import os
import os.path

class DBAC:

    def __init__(self):
        dr = os.getcwd()
        fle = os.path.join(dr,'DataBase','configuration.ini')
        config = configparser.ConfigParser()
        config.read(fle)
        CONNECTION_STRING = config['MONGODB']['CONNECTION_STRING'])
        self._client = pymongo.MongoClient(CONNECTION_STRING, ssl_cert_reqs = ssl.CERT_NONE)

    def get_client(self):
        return self._client

if __name__ == '__main__':
    db = DBAC()
