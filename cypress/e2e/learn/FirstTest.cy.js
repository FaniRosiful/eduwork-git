/// <reference types="cypress"/>

describe('MyFisrtTest', () => { 
    it('clicking "Type" show the right headings', () => {
        cy.visit('https://example.cypress.io')
        //cy.pause()
        cy.contains('type').click()
        cy.url().should('include','commands/actions')
        cy.get('.action-email')
        .type('emailcoba@gmail.com')
        .should('have.value','emailcoba@gmail.com')
    });
 })