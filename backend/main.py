from flask import Flask, json, Blueprint
# from werkzeug.exceptions import HTTPException
import socket
from bs4 import BeautifulSoup

# Import blueprints
from blueprints.browser import browser
from blueprints.verify import verify
from blueprints.sliders import sliders
from blueprints.wikipedia import wikipedia
from blueprints.music import music_bp

# Initialize App
app = Flask(__name__)
hostname = socket.getfqdn() # Get the hostname

# Register Blueprints
app.register_blueprint(browser, url_prefix="/api/browser")
app.register_blueprint(verify, url_prefix="/api/verify")
app.register_blueprint(sliders, url_prefix="/api/sliders")
app.register_blueprint(wikipedia, url_prefix='/api/wikipedia')
app.register_blueprint(music_bp, url_prefix='/api/music')

# Root Directory
@app.route("/api/")
def index():
    print("/api")
    return "Ok", 200

if __name__ == "__main__":
    app.run(host=socket.gethostbyname_ex(hostname)[2][1], debug=False, port=8080)
