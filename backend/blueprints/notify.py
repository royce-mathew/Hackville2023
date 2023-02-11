from flask import Blueprint

notify = Blueprint(__name__, "notify")

notify.route("/")
def index():
    return "Connected endpoints: ";

