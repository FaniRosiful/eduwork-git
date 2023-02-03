/// <reference types="cypress" />


// describe('Assertion', () => { 

//     it('assertion', () => {
//         cy.visit('http://example.com',{timeout:10000})
//     });
//     it('cek', () => {
//       cy.visit.url().should('include','example.com')
//     });
//  });

 /// <reference types="cypress" />


describe('Assertion', () => { 

  beforeEach(() => {
      
    cy.visit('http://example.com',{timeout:10000});
    cy.clearAllCookies;
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
    cy.clearCookies;
  })
  it('first', () => {
      cy.visit('http://example.com',{timeout:5000})
      //cy.pause()
      //cy.contains('type').click() 
  });
  it('assertion1', () => {
    cy.url().should('include','example.com') 
  });
  it('check', () => {
    cy.get('h1').should('be.visible') 
  });
})