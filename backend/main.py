from flask import Flask, json, Blueprint
import socket

# Import blueprints
from blueprints.browser import browser
from blueprints.verify import verify
from blueprints.sliders import sliders
from blueprints.wikipedia import wikipedia
from blueprints.music import music_bp
from blueprints.faq import faq
from blueprints.email import email

# Initialize App
app = Flask(__name__)
hostname = socket.gethostname() if len(socket.gethostname()) < len(socket.getfqdn()) else socket.getfqdn() # Get the hostname

# Api Prefix
API_PREFIX="/api"

# Register Blueprints
app.register_blueprint(browser, url_prefix=f"{API_PREFIX}/browser")
app.register_blueprint(verify, url_prefix=f"{API_PREFIX}/verify")
app.register_blueprint(sliders, url_prefix=f"{API_PREFIX}/sliders")
app.register_blueprint(wikipedia, url_prefix=f'{API_PREFIX}/wikipedia')
app.register_blueprint(music_bp, url_prefix=f'{API_PREFIX}/music')
app.register_blueprint(faq, url_prefix=f'{API_PREFIX}/faq')
app.register_blueprint(email, url_prefix=f'{API_PREFIX}/email')

# Root Directory
@app.route(f"{API_PREFIX}/")
def index():
    print(f"Recieved request on {API_PREFIX}")
    return "Ok", 200

if __name__ == "__main__":
    app.run(host=socket.gethostbyname(hostname), debug=False, port=8080)
