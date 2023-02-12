from flask import Blueprint
from utils import browser

browser = Blueprint("browser", __name__)

@browser.route("/open/")
def index():
    browser.open_browser()
    # Call browser method for opening / closing browser
    return "Connected endpoints: ", 200

@browser.route("/close/")
def index2():
    browser.close_browser()
    return "Connected endpoints: ", 200

