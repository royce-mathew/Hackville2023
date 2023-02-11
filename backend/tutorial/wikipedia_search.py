from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

QUERY_XPATH='/html/body/div[1]/div/header/div[2]/div/div/div/form/div/div/div[1]/input'



def search(search_term:str):
    url = "https://en.wikipedia.org/wiki/Main_Page"
    options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(options=options)
    driver.get(url)
    time.sleep(3)
    driver.find_element(by=By.XPATH, value='/html/body/div[1]/div/header/div[2]/div/a').click()
    time.sleep(2.0)
    driver.find_element(by=By.XPATH, value=QUERY_XPATH).send_keys(search_term)
    time.sleep(2.0)
    driver.find_element(by=By.XPATH, value=QUERY_XPATH).send_keys(Keys.ENTER)
    time.sleep(50000)
    driver.quit()

search()