import { Builder, By, until, Key } from "selenium-webdriver";
import { expect } from "chai";

let driver
describe('Check Chromedriver headers and navigation', async () => {
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.manage().window().setRect({ width: 1230, height: 730 })
        await driver.get('https://chromedriver.chromium.org/home')
    })
    after(()=>{
        driver.quit()
    })

    it('Check that home page header text is "ChromeDriver"', async () => {
        let homePageHeader = await driver.findElement(By.css('h1 span'))
        expect(String(await homePageHeader.getText()).toLowerCase()).to.equal('chromedriver')
    })
    it('Check that Chrome extensions page header text is "Chrome Extensions"', async()=>{
        let chromeExtBtn = driver.wait(until.elementLocated(By.xpath('//a[contains(@class, "aJHbb") and contains(@class, "dk90Ob")and contains(@class, "jgXgSe")and contains(@class, "HlqNPb")and contains(@data-url, "/extensions")]/../..')))
        await chromeExtBtn.click()
        driver.executeScript('document.querySelector("h1 span").setAttribute("style", "color:red")')
        let chromeExtPageHeader = await driver.wait(until.elementLocated(By.css('h1 span')))
        expect(String(await chromeExtPageHeader.getText()).toLowerCase()).to.equal('chrome extensions')
    })

    it('Check that Search is working correctly', async()=>{
        let searchBtn =  await driver.wait(until.elementLocated(By.css('div[jscontroller="gK4msf"]')))
        await searchBtn.click()

        driver.wait(until.elementLocated(By.css('input.whsOnd.zHQkBf')))
        let searchInput = await driver.findElement(By.css('input.whsOnd.zHQkBf'))

        await searchInput.sendKeys('driver', Key.RETURN)
        let firstResult = driver.wait(until.elementLocated(By.css('div[jscontroller = U720xd]>div>div:first-child')))

        expect(await firstResult.getText()).to.contain('driver')
    })

    it('Check correctness of page URL: contains /mobile-emulation', async()=>{
        let backBtn = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.h3nfre.M9Bg4d'))
        await backBtn.click()
        let moreMenu = await driver.findElement(By.css('li.VsJjtf.oXBWEc > div.PsKE7e'))
        await moreMenu.click()
        let mobEmulBtn = await driver.findElement(By.css('ul.VcS63b a[href="/mobile-emulation"]'))
        await mobEmulBtn.click()
        let currUrl = await driver.getCurrentUrl()
        expect(currUrl).to.contain('/mobile-emulation')
    })
})

