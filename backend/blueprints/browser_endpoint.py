from flask import Blueprint

browser = Blueprint("browser", __name__)
app = None;

@browser.route("/")
def index():
    print("HI")

    return "Connected endpoints: ", 400;

