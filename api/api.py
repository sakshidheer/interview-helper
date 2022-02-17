import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/checkIfUserNameValid', methods=['GET'])
def home():
    if 'username' in request.args:
        username = request.args['username']
        if username == 'sakshi':
            return 'false'
        else:
            return 'true'

app.run()