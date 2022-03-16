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
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/checkIfUserNameValid/{username}")
def read_item(username: str):
    isValid = False
    if username == 'sdheer':
        isValid = True
    return {"valid": isValid}