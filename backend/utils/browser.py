import subprocess

def open_browser(browser='chrome',url='www.google.com'):
    subprocess.Popen(f'start {browser} /new-tab {url}',shell = True)

def main():
    open_browser()

if __name__ == '__main__':
    main()
