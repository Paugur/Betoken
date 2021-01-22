from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from comment_extractor_id import CommentStripper
import json
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/youtube_extractor/<ID>/<APIKEY>', methods=['post'])
def get_raw_comments(ID, APIKEY):
    stripp = CommentStripper(ID, APIKEY)
    stripp_vid_inf = stripp.video_info
    stripp_chan_inf = stripp.channel_info
    stripp_comments = stripp.raw_comments
    return {'yt_video_info': stripp_vid_inf, 'yt_chann_info': stripp_chan_inf, 'yt_comment_info': stripp_comments}


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
