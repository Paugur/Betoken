from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from backend.Youtube.YoutubeExtractor import CommentStripper
import json
import os
#temp imports
from backend.Youtube.amazonSentimentAnalysis.SentimentProducer import SentiGetter as sg
from backend.Youtube.amazonSentimentAnalysis.TextPipeLine import TextPipeLine as tpl

#app = Flask(__name__, static_folder='../build', static_url_path='/')
app = Flask(__name__)
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
    stripp = CommentStripper(ID, APIKEY)
    video = stripp.video_info
    channel = stripp.channel_info
    comments = stripp.raw_comments
    return {'comments': comments, 'video': video, 'channel': channel}

@app.route('/test/Sentiment/', methods=['GET'])
def get_text():
    theString = "omg dont use vim just use fing notepad++ or visual studios dont need to crap out a fing kidney stone you forgot how to save a file."
    pipe = tpl()
    the_list = pipe.remove_unwanted(theString)
    print(the_list)
    vect = pipe._word2idx(the_list)
    print(vect)

    geter = sg()

    print(geter.get_predictions(vect))

    return "success"


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
