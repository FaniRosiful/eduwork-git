 ///<reference types="cypress" />
 const userName="null";
 const Pass="null" ;
 
 describe('Scenario Saucedemo',()=>{

   beforeEach(() => {
      
      cy.visit('https://www.saucedemo.com',{timeout:5000});
      cy.clearAllCookies;
      cy.clearAllLocalStorage;
      cy.clearAllSessionStorage;
      cy.clearCookies;
    })


   it('test soucedemo', () => {
      cy.reload();
      cy.get('title').wait(5000).should('contain.text','Swag Labs');
      cy.get('#user-name').wait(1000).clear;
      cy.get('#user-name').wait(1000).type("standard_user");
      cy.get('#password').wait(1000).clear;
      cy.get('#password').wait(1000).type("secret_sauce");
      cy.get('#password').wait(1000).submit;
      cy.get('#login-button',{timeout:5000}).click();
      cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
   });



   it('test soucedemo2', () => {
    // cy.visit('https://www.saucedemo.com',{timeout:5000});
    cy.reload;
    cy.get('title').wait(5000).should('contain.text','Swag Labs');
    cy.get('#user-name').wait(1000).clear;
    cy.get('#user-name').wait(1000).type("locked_out_user");
    cy.get('#password').wait(1000).clear;
    cy.get('#password').wait(1000).type("secret_sauce");
    cy.get('#password').wait(1000).submit;
    cy.get('#login-button',{timeout:5000}).click();
    //cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
 });
 it('test soucedemo3', () => {
    // cy.visit('https://www.saucedemo.com',{timeout:5000});
    cy.reload;
    cy.get('title').wait(5000).should('contain.text','Swag Labs');
    cy.get('#user-name').wait(1000).clear;
    cy.get('#user-name').wait(1000).type("problem_user");
    cy.get('#password').wait(1000).clear;
    cy.get('#password').wait(1000).type("secret_sauce");
    cy.get('#password').wait(1000).submit;
    cy.get('#login-button',{timeout:5000}).click();
    cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
 });
});