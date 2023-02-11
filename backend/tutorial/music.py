from selenium.webdriver.common.by import By
import undetected_chromedriver as uc
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import time


def get_login_info():

    info = []
    f = open('login.txt')

    for line in f.readlines():
        info.append(line.strip('\n'))

    f.close()

    return info


def play_song(song: str):

    url = 'https://music.youtube.com/'
    options = uc.ChromeOptions()
    driver = uc.Chrome(options=options, use_subprocess=True)
    driver.get(url)

    login_info_holder = get_login_info()
    USERNAME = login_info_holder[0]
    PASSWORD = login_info_holder[1]

    wait = WebDriverWait(driver, timeout=10)

    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.sign-in-link.ytmusic-nav-bar')))
    driver.find_element(by=By.CSS_SELECTOR, value='.sign-in-link.ytmusic-nav-bar').click()

    username_field = '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input'
    WebDriverWait(driver, timeout=10).until(EC.presence_of_element_located((By.XPATH, username_field)))
    driver.find_element(by=By.XPATH, value=username_field).send_keys(USERNAME)
    driver.find_element(by=By.CSS_SELECTOR, value='.VfPpkd-LgbsSe-OWXEXe-k8QpJ:not(:disabled)').click()

    password_field = '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input'
    wait(driver, timeout=10).until(EC.presence_of_element_located((By.XPATH, password_field)))
    time.sleep(2)
    driver.find_element(by=By.XPATH, value=password_field).send_keys(PASSWORD)
    time.sleep(1)
    driver.find_element(by=By.CSS_SELECTOR, value='.VfPpkd-LgbsSe-OWXEXe-k8QpJ:not(:disabled)').click()
    time.sleep(7)
    
    search_button = 'tp-yt-paper-icon-button.ytmusic-search-box, input.ytmusic-search-box, input.ytmusic-search-box::placeholder'
    wait(driver, timeout=7).until(EC.presence_of_element_located((By.CSS_SELECTOR, search_button)))
    driver.find_element(by=By.CSS_SELECTOR, value=search_button).click()
    driver.find_element(by=By.CSS_SELECTOR, value='input.ytmusic-search-box').send_keys(song)
    driver.find_element(by=By.CSS_SELECTOR, value='input.ytmusic-search-box').send_keys(Keys.ENTER)
    time.sleep(3)

    option_lst = '//*[@id="contents"]/ytmusic-responsive-list-item-renderer[1]/div[2]/div[1]/yt-formatted-string/a'
    wait(driver, timeout=5).until(EC.presence_of_element_located((By.XPATH, option_lst)))
    driver.find_element(by=By.XPATH, value=option_lst).click()

    timer = driver.find_element(by=By.XPATH, value='/html/body/ytmusic-app/ytmusic-app-layout/div[3]/ytmusic-search-page/ytmusic-tabbed-search-results-renderer/div[2]/ytmusic-section-list-renderer/div[2]/ytmusic-shelf-renderer/div[3]/ytmusic-responsive-list-item-renderer[1]/div[2]/div[3]/yt-formatted-string/span[6]')
    print(timer)
    timer = timer.text.split(':')

    song_choice = '/html/body/ytmusic-app/ytmusic-app-layout/ytmusic-nav-bar/div[1]/a'
    wait(driver, timeout=5).until(EC.presence_of_element_located((By.XPATH, song_choice)))
    driver.find_element(by=By.XPATH, value=song_choice).click()
    time.sleep(float(timer[0]) * 60 + float(timer[1]))

    driver.quit()
