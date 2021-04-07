import unittest
from unittest.mock import patch
from DataBase.Login import UserInfoLoginCollection as UILC

class TestLog(unittest.TestCase):

    @patch('DataBase.Login.UserInfoLoginCollection._get_user_document')
    def test_login_false_username(self, mok_login_sha):
        mok_login_sha.return_value = None
        test1 = UILC()
        response = test1.login_user("stri", "stri")
        self.assertFalse(response['login-success'])
        self.assertTrue(response['invalid-user-id'])

if __name__ == '__main__':
    unittest.main()
