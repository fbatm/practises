# coding:utf-8
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time

url='https://test-boss.vcg.com'
dirver = webdriver.Chrome()
dirver.get(url)


dirver.find_element_by_xpath('//*[@id="login-box"]/div/div/form/fieldset/label[1]/span/input').send_keys('bin.wang')
dirver.find_element_by_xpath('//*[@id="login-box"]/div/div/form/fieldset/label[2]/span/input').send_keys('wb_boss')
dirver.find_element_by_xpath('//*[@id="login-box"]/div/div/form/fieldset/div[2]/button').click()

#登录时延
time.sleep(5)

nav1=dirver.find_element_by_css_selector('#main-container > div.sidebar.menu-min > div > ul > li:nth-child(5) > a')
ActionChains(dirver).move_to_element(nav1).perform()
dirver.find_element_by_css_selector('#main-container > div.sidebar.menu-min > div > ul > li:nth-child(5) > ul > li:nth-child(2) > a').click()
dirver.find_element_by_css_selector('#main-container > div.sidebar.menu-min > div > ul > li.active.open > ul > li.active > ul > li:nth-child(1) > a').click()

time.sleep(5)

dirver.quit()