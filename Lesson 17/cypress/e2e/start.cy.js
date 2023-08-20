import { mainPage } from "./pageObjects/mainPage"
import { header } from "./pageObjects/components/header"

describe('Start work with Cypress', () => {
  beforeEach(()=>{
    cy.visit('https://docs.cypress.io/')
  })
  it('Check that main page title is Why cypress', () => {
    cy.fixture('common.json').then((commonFixtures)=>{
      mainPage.checkTitleIs(commonFixtures.mainTitle)
    })
    
  })
  it('Check that user is able to set color theme to dark', () =>{
    header.changeColorTheme()
    header.checkColorThemeIsDark()
  })
})



