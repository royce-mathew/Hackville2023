from flask import Flask, json, Blueprint
# from werkzeug.exceptions import HTTPException
import socket


# Import blueprints
from blueprints.browser import browser
from blueprints.verify import verify
from blueprints.settings import settings



# Initialize App
app = Flask(__name__)
hostname = socket.getfqdn() # Get the hostname

# Register Blueprints
app.register_blueprint(browser, url_prefix="/api/browser")
app.register_blueprint(verify, url_prefix="/api/verify")
app.register_blueprint(settings, url_prefix="/api/settings")



@app.route("/api/")
def index():
    print("/api")
    return "Ok", 200;

if __name__ == "__main__":
    app.run(host=socket.gethostbyname_ex(hostname)[2][0], debug=True, port=8080)
