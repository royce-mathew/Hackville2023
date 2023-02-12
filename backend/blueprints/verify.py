from flask import Blueprint, request
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from bs4 import BeautifulSoup
from utils import brightness, volume
import socket

verify = Blueprint("verify", __name__)

options = Options()
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

hostname = socket.getfqdn()
soup = None
inp = socket.gethostbyname_ex(hostname)[2][1]

with open("backend\static\setup\index.html", 'r') as html:
    soup = BeautifulSoup(html, 'html.parser')
    temp = soup.find(id="ipAddress")

if temp.string is None:
    temp.string = inp
else:
    temp.string.replaceWith(inp)

with open("backend\static\setup\index.html", 'w') as html:
    html.write(str(soup))
    
driver.get(r"file:///C:/Users/shang/Downloads/Hackville/Hackville2023/backend/static/setup/index.html")

@verify.route("/", methods=["GET"])
def index():
    driver.quit()                   
    return {volume.get_volume}, 200
