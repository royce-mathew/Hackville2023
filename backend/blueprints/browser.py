from flask import Blueprint

browser = Blueprint("browser", __name__)

@browser.route("/")
def index():
    print("HI")
    return "Connected endpoints: ", 400;

