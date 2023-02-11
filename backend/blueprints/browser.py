from flask import Blueprint

browser = Blueprint("browser", __name__)

@browser.route("/")
def index():
    # Call browser method for opening / closing browser
    return "Connected endpoints: ", 200;

