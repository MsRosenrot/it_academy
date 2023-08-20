
class Header{
    get changeColorThemeBtn(){
        return cy.get('button.clean-btn.toggleButton_gllP.darkNavbarColorModeToggle_X3D1').as('changeThemeBtn')
    }
    get menuItems(){
        return cy.get('div.navbar__inner .navbar__items:first-child a.navbar__link')
    }
    get searchBar(){
        return cy.get('.searchBox_ZlJk')
    }
    changeColorTheme(){
        this.changeColorThemeBtn.click()
    }
    checkColorThemeIsDark(){
        this.changeColorThemeBtn.should('have.attr', 'title').and('contain', 'currently dark mode')
    }
    searchAndNavigateToFirstResult(searchEntry){
        this.searchBar.click()
        cy.get('.DocSearch-Input').should('be.visible').type(searchEntry).wait(700).type('{enter}')
    }
}

const header = new Header()

export {header}