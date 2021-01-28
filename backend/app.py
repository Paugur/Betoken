from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from .extractors import YoutubeExtractor
import json
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/youtube_extractor/<ID>/<APIKEY>', methods=['POST'])
def get_raw_comments(ID, APIKEY):
    stripp = CommentStripper(ID, APIKEY)
    video = stripp.video_info
    channel = stripp.channel_info
    comments = stripp.raw_comments
    return {'comments': comments, 'video': video, 'channel': channel}

@app.route('/api/manual/youtube_extractor/<ID>/<APIKEY>', methods=['GET'])
def get_raw_comments_manual(ID, APIKEY):
    stripp = YoutubeExtractor.CommentStripper(ID, APIKEY)
    video = stripp.video_info
    channel = stripp.channel_info
    comments = stripp.raw_comments
    return {'comments': comments, 'video': video, 'channel': channel}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
