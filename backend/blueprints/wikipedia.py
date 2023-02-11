from flask import Blueprint, request
from tutorial import wikipedia_search

wikipedia = Blueprint("wikipedia", __name__)

@wikipedia.route("/", methods=["GET"])
def index():
    wikipedia_search.main()
    return "Success", 200;