from flask import Blueprint, request
from utils import volume as b_util;

volume = Blueprint("volume", __name__)

@volume.route("/volume/", methods=["GET"])
def index():
    volume_percent = request.args.get("percent")
    b_util.Volume.volume_set(volume_percent)
    return "Success", 200;

@volume.route("/brightness/", methods=["GET"])
def index():
    volume_percent = request.args.get("percent")
    b_util.Volume.volume_set(volume_percent)
    return "Success", 200;

