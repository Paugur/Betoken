import json
import os
from pathlib import Path
from os.path import expanduser
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return app.send_static_file('index.html')