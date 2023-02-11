from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time



def main():

    url = 'https://learn.ontariotechu.ca/'
    url2 = "https://en.wikipedia.org/wiki/Main_Page"
    options = webdriver.ChromeOptions()
    # options.binary_location = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    # options.add_argument("headless")
    # driverService = Service(r'C:\Users\COCRe\Downloads\CasualSoftwares\chromedriver_win32\chromedriver.exe')
    driver = webdriver.Chrome(options=options)
    driver.get(url)
    time.sleep(1)
    driver.get(url2)
    time.sleep(3)
    driver.find_element(by=By.XPATH, value='/html/body/div[1]/div/header/div[2]/div/a').click()
    time.sleep(2.0)
    driver.find_element(by=By.XPATH, value='/html/body/div[1]/div/header/div[2]/div/div/div/form/div/div/div[1]/input').send_keys("dogs")
    driver.find_element(by=By.XPATH, value='/html/body/div[1]/div/header/div[2]/div/div/div/form/div/div/div[1]/input').send_keys(Keys.ENTER)
    time.sleep(50000)
    driver.quit()

