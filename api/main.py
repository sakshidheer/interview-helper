'''
import flask
from flask import request, jsonify, make_response
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/checkIfUserNameValid', methods=['GET'])
def home():
    response = {}
    if 'username' in request.args:
        username = request.args['username']
        if username == 'sakshi':
            response['valid'] = True
        else:
            response['valid'] = False
        resp = make_response(json.dumps(response))
        resp.headers['content-type'] = 'application/javascript; charset=utf-8'
        return resp

app.run()
'''
from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/checkIfUserNameValid/{username}")
def read_item(username: str):
    return {"valid": True}