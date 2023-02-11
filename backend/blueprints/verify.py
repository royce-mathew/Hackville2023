from flask import Blueprint, request

verify = Blueprint("verify", __name__)

@verify.route("/", methods=["GET"])
def index():
    return "Success", 200;

