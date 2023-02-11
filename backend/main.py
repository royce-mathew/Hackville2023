from flask import Flask

app = Flask(__name__)
# app.register_blueprint(views, url_prefix="/notify")

@app.route("/")
def index():
    print("")
    return 0;

if __name__ == "__main__":
    app.run(debug=True, port=8080)
