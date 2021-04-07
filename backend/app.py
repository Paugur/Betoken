from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from backend.Youtube.YoutubeExtractor import CommentStripper
from backend.DataBase.Register import UserInfoCollection as UIC
from backend.DataBase.Login import UserInfoLoginCollection as UILC
import json
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')
#app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/youtube-extractor/<ID>/<APIKEY>', methods=['POST', 'GET'])
def get_raw_comments(ID, APIKEY):
    stripp = CommentStripper(ID, APIKEY)
    video = stripp.video_info
    channel = stripp.channel_info
    comments = stripp.raw_comments
    return {'comments': comments, 'video': video, 'channel': channel}

@app.route('/api/register-user/', methods=['POST', 'GET'])
def register_user():
    user_agent = request.user_agent
    registration_dict = request.json
    registration_dict.update({"registration-creation-device":user_agent.platform})
    try:
        registration_dict.update({"registration-creation-language":request.accept_languages[0][0]})
    except Exception as e:
        registration_dict.update({"registration-creation-language":None})

    try:
        browser_dict = {"browser": user_agent.browser, "version": user_agent.version}
    except Exception as e:
        browser_dict = {"browser": None, "version": None}

    registration_dict.update({"registration-creation-browser-info": browser_dict})

    user_adder = UIC()
    return jsonify(user_adder.register_user(registration_dict))

@app.route('/api/log-login-attempt/', methods=['POST', 'GET'])
def log_login_attempt():
    login_dict = request.json
    user_agent = request.user_agent
    login_object = UILC()
    status_dict = login_object.login_user(login_dict['user-id'], login_dict['user-password'])
    browser_dict = {"browser": user_agent.browser, "version": user_agent.version}
    login_dict.update({"login-browser-info": browser_dict, "activity-info": status_dict})
    login_object.log_login_request(login_dict)
    return json.dumps(status_dict['login-success'])

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
