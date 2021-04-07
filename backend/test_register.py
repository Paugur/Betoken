import unittest
from unittest.mock import patch
from DataBase.Register import UserInfoCollection as UIC

class TestReg(unittest.TestCase):

    @patch('DataBase.Register.UserInfoCollection._check_existance_username')
    @patch('DataBase.Register.UserInfoCollection._check_existance_email')
    def test_register_user_email_issue(self, mok_check_ex_email, mok_check_ex_username):
        mok_check_ex_email.return_value = True
        mok_check_ex_username.return_value = True
        test1 = UIC()
        response = test1.register_user({'email-address-primary':'sriram', 'user-id':'sriram'})
        self.assertFalse(response['status'])

    @patch('DataBase.Register.UserInfoCollection._check_existance_username')
    @patch('DataBase.Register.UserInfoCollection._check_existance_email')
    def test_register_user_username_issue(self, mok_check_ex_email, mok_check_ex_username):
        mok_check_ex_email.return_value = False
        mok_check_ex_username.return_value = True
        test1 = UIC()
        response = test1.register_user({'email-address-primary':'sriram', 'user-id':'sriram'})
        self.assertFalse(response['status'])

if __name__ == '__main__':
    unittest.main()
