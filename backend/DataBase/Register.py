import ssl
from flask_pymongo import PyMongo
from BaseAccess import DBAC
import pymongo
from werkzeug.security import generate_password_hash, check_password_hash

class RegisterAndLogin:

    def __init__(self):
        connec_client = DBAC().get_client()
        user_database = connec_client['USERDATABASE']
        self._user_collection = user_database['USERCOLLECTION']

    def _get_user_collection(self):
        return self._user_collection

    def register_user(self, user_dict):
        if self._check_existance(user_dict['email']):
            return False
        else:
            user_dict.update({"hashed_password": generate_password_hash(user_dict['password'], "sha256"), 'tracked_data':[]})
            user_dict.pop('password')
            self._get_user_collection().insert_one(user_dict)
            return True

    def _check_existance(self, email):
        return len(list(self._get_user_collection().find({"email":email}))) > 0

    def _get_user(self, email):
        document = list(self._get_user_collection().find({"email":email}))
        return document[0] if len(document) > 0 else None

    def user_login(self, sign_in_dict):
        document_dict = self._get_user(sign_in_dict['email'])
        return False if document_dict is None else check_password_hash(document_dict['hashed_password'], sign_in_dict['password'])

if __name__ == '__main__':
    reg = RegisterAndLogin()
    temp_dict ={"password": 'test2', "email": "gneelamegan@gmail.com", 'time':"2:30pm"}
    #print(reg.register_user(temp_dict))
    print(reg.user_login(temp_dict))
    #print(reg._get_user("riramgovindanwork@gmail.com"))
    #test_dict = {}
    #test_dict.update({"test1":1,"test2":2})
    #test_dict.update({"test3":3,"test4":4})
    #print(test_dict)
