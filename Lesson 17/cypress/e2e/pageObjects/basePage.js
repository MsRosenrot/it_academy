
class BasePage {
    get pageTitleText() {
      return cy.get('h1').text();
    }
    get pageTitle() {
        return cy.get('h1');
      }
    checkTitleIs(title){
      cy.get('h1').should('have.text', title)
    }
    checkElementHasMembers(element, membersArray){
      element.then(($els)=>{
        return Cypress.$.makeArray($els).map((el) => el.innerText.toLowerCase())
      })
      .should('have.members', membersArray)
    }
  }
  export { BasePage };