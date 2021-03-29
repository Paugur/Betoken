import ssl
from flask_pymongo import PyMongo
from backend.DataBase.BaseAccess import DBAC
import pymongo
from werkzeug.security import generate_password_hash

class UserInfoCollection:

    def __init__(self):
        connec_client = DBAC().get_client()
        user_database = connec_client['USERDATABASE']
        self._user_collection = user_database['USERCOLLECTION']

    def _get_user_collection(self):
        return self._user_collection

    def get_user_collection_count(self) -> int:
        return self._get_user_collection().find().count()

    def register_user(self, user_dict):
        if self._check_existance_email(user_dict['email-address-primary']):
            return {'status':False, "issue": "email-address-primary"}
        elif self._check_existance_username(user_dict['user-id']):
            return {'status':False, "issue": "user-id"}
        else:
            user_dict.update({"user-info-id-num":100_000 + self.get_user_collection_count(), "tracked-websites-and-videos":[]})
            user_dict.update({"document-updated-timestamp": None, "document-delete-flag":1, "document-status":1})
            user_dict.update({"user-password": generate_password_hash(user_dict['user-password'], "sha256")})
            self._get_user_collection().insert_one(user_dict)
            return {'status':True, "issue": None}

    def _check_existance_email(self, email: str) -> bool:
        return len(list(self._get_user_collection().find({"email-address-primary":email}))) > 0

    def _check_existance_username(self, username: str) -> bool:
        return len(list(self._get_user_collection().find({"user-id":username}))) > 0

#if __name__ == '__main__':
    #reg = UserInfoCollection()
    #temp_dict ={"password": 'test3', "email": "grsridevi@gmail.com", 'time':"2:30pm"}
