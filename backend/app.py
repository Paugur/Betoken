from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from backend.Youtube.YoutubeExtractor import CommentStripper
from backend.DataBase.Register import UserInfoCollection as UIC
import json
import os

app = Flask(__name__, static_folder='../build', static_url_path='/')
#app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/youtube_extractor/<ID>/<APIKEY>', methods=['POST', 'GET'])
def get_raw_comments(ID, APIKEY):
    stripp = CommentStripper(ID, APIKEY)
    video = stripp.video_info
    channel = stripp.channel_info
    comments = stripp.raw_comments
    return {'comments': comments, 'video': video, 'channel': channel}

@app.route('/api/register-user/<string:REGISTRATIONSTRING>', methods=['GET'])
def register_user(REGISTRATIONSTRING):
    user_agent = request.user_agent
    registration_dict = json.loads(REGISTRATIONSTRING)
    registration_dict.update({"registration-creation-device":user_agent.platform})
    registration_dict.update({"registration-creation-language":request.accept_languages[0][0]})
    browser_dict = {"browser": user_agent.browser, "version": user_agent.version}
    registration_dict.update({"registration-creation-browser-info": browser_dict})
    user_adder = UIC()
    return jsonify(user_adder.register_user(registration_dict))

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
