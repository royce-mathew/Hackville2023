from flask import Blueprint, request
import undetected_chromedriver as uc
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import socket
import time


options = uc.ChromeOptions()
driver = uc.Chrome(options=options, use_subprocess=True)

hostname = socket.getfqdn()
soup = None
inp = socket.gethostbyname_ex(hostname)[2][0]

with open("test.html", 'r') as html:
    soup = BeautifulSoup(html, 'html.parser')
    temp = soup.find(id="ipAddress")

if temp.string is None:
    temp.string = inp
else:
    temp.string.replaceWith(inp)

with open("test.html", 'w') as html:
    html.write(str(soup))
    

verify = Blueprint("verify", __name__)

@verify.route("/", methods=["GET"])
def index():                   
    return {}, 200
