import { expect } from 'chai';

describe('Check that user is able to navigate to Get started page',async()=>{
    let getStartedBtn
    
    before(async()=>{
        await browser.url('https://webdriver.io/')
        getStartedBtn = await $('div.buttons_pzbO a:first-child')
    })

    it('Check that user is able to change color theme', async ()=>{
        await getStartedBtn.waitForEnabled()
        await getStartedBtn.click()
        await $('h1').waitForDisplayed()
        expect(String(await $('h1').getText()).toLowerCase()).to.equal('getting started')
    })
})