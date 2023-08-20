import { header } from "./pageObjects/components/header"
import { mainPage } from "./pageObjects/mainPage"
import * as  commonFixtures from "../fixtures/common.json"

describe('Header functionality: Menu and Search', () => {
    beforeEach(()=>{
      cy.visit('https://docs.cypress.io/')
    })
    it('Check that menu contains tabs: "guides, api, plugins, examples, faq, learn"', () => { 
      mainPage.checkElementHasMembers(header.menuItems, ['guides', 'api', 'plugins', 'examples', 'learn', 'faq'])
    })
  
    commonFixtures.searchTuple.forEach(($searchResultPair)=>{
      const [searchEntry, result] = $searchResultPair
      it(`Check that if user enters "${searchEntry}" in searchbar, first result is page with title: "${result}"`, () => {
        header.searchAndNavigateToFirstResult(searchEntry)
        mainPage.checkTitleIs(result)
      })
  })
  })