import ssl
from flask_pymongo import PyMongo
#from BaseAccess import DBAC
from backend.DataBase.BaseAccess import DBAC
import pymongo
from werkzeug.security import check_password_hash

class UserInfoLoginCollection:

    def __init__(self):
        connec_client = DBAC().get_client()
        user_database = connec_client['USERDATABASE']
        self._login_collection = user_database['LOGINCOLLECTION']
        self._user_collection = user_database['USERCOLLECTION']

    def _get_user_collection(self):
        return self._user_collection

    def _get_login_collection(self):
        return self._login_collection

    def get_login_collection_count(self):
        return self._get_login_collection().find().count()

    def _get_user_document(self, username):
        the_list = list(self._get_user_collection().find({"user-id":username},{'user-password':1, "_id": 0}))
        return the_list[0] if len(the_list) > 0 else None

    def login_user(self, username, password):
        user_document = self._get_user_document(username)
        if user_document is None:
            return {"login-success":False, "invalid-user-id":True, "invalid-pwd": False}
        return {"login-success":False, "invalid-user-id":False, "invalid-pwd":True} if not check_password_hash(user_document['user-password'], password) else {"login-success":True, "invalid-user-id":False, "invalid-pwd":False}

    def log_login_request(self, login_dict):
        login_dict.update({"login-info-id":self.get_login_collection_count(), "activity-type":"login"})
        self._get_login_collection().insert_one(login_dict)


# if __name__ == '__main__':
#
#     UILC = UserInfoLoginCollection()
#     print(UILC.login_user("Turbintube", "test1"))
