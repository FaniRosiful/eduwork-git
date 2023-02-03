/// <reference types="cypress"/>

describe('ZeroWebApp', () => { 
    beforeEach(() => {
      
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:10000});
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.clearCookies;
      })
    it('Visit to login web page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });
    it('Type username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
    it('Type password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });
    it('Click remember me', () => {
        //cy.get('#user_remember_me').clear()
        cy.get('#user_remember_me').click()
    });
    it('Click button', () => {
        cy.get('input').contains('Sign in').click()
    });
})