import undetected_chromedriver as uc
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
import time

def get_login_info():
    info = []
    f = open("login.txt")

    for line in f.readlines():
        info.append(line.strip('\n'))
    f.close()

    return info


url = 'https://www.google.com/gmail/about/'
options = uc.ChromeOptions()
driver = uc.Chrome(options=options, use_subprocess=True)

def login(sleep: int):
    
    login_info_holder = get_login_info()
    USERNAME = login_info_holder[0]
    PASSWORD = login_info_holder[1]

    # open the gmail website
    driver.get(url)
    time.sleep(sleep)
  
    # sending the username and password to log-in fields
    driver.find_element(by=By.CSS_SELECTOR, value='.button--medium').click()
    time.sleep(sleep)
    driver.find_element(by=By.NAME, value="identifier").send_keys(USERNAME)
    time.sleep(sleep)
    driver.find_element(by=By.CSS_SELECTOR, value='.VfPpkd-LgbsSe-OWXEXe-k8QpJ:not(:disabled)').click()
    time.sleep(sleep)
    driver.find_element(by=By.NAME, value='Passwd').send_keys(PASSWORD)
    time.sleep(sleep)
    driver.find_element(by=By.CSS_SELECTOR, value='.VfPpkd-LgbsSe-OWXEXe-k8QpJ:not(:disabled)').click()
    time.sleep(20)


login(1.5)