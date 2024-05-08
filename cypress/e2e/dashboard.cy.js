import * as object from "./object/page.js"

//before(() =>{
 // cy.config("defaultCommandTimeout",10000);
//});

describe('template spec', () => {
  beforeEach(()=> {
    cy.visit("https://www.saucedemo.com/");
    cy.get(object.input_username).type("standard_user");
    cy.get(object.input_password).type("secret_sauce");
    cy.get(object.btn_login).click(); 
  })

  it('Add product, remove and back to product', () => {
    cy.get('[id*=item_0_title_link]').click();
    //cy.get(object.home_page).should("be.visible");
    cy.get('div:contains("Sauce Labs Bike Light")').should("be.visible");
    cy.get('[id*=add-to-cart]').click();
    cy.get('[id*=shopping_cart_container]').should('be.visible');
    cy.get('[id*=remove]').click();
    cy.get('[id*=back-to-products]').click();
    //cy.contains('Swag Labs').should('be.visible');
    cy.get('div:contains("Swag Labs")').should('be.visible');
    //cy.contains('Products').should('be.visible');
    cy.get('div:contains("Products")').should('be.visible');
 // })

  //it('Add product lagi dan lanjut ke cart', () => {
    cy.get('[id*="item_4_title_link"]').click();
    //cy.get('div:contains("Sauce Labs Backpack")').click();
    cy.get('div:contains("Sauce Labs Backpack")').should("be.visible");
    cy.get('[id*=add-to-cart]').click();
    cy.get('[id*=shopping_cart_container]').should('be.visible');
    cy.get('[id*=shopping_cart_container]').click();
    cy.get('div:contains("Your Cart")').should('be.visible');
 //})

  //it('Your Cart Page', () => {
    cy.get('div:contains("Sauce Labs Backpack")').should("be.visible");
    cy.get('[id*=checkout]').click();
    cy.get('div:contains("Checkout: Your Information")').should('be.visible');
 // })

  //it('Checkout: Your Information Page', () => {
    cy.get(object.input_first_name).type("Cahyo");
    cy.get(object.input_last_name).type("Eko");
    cy.get(object.input_zip_code).type("12345");
    cy.get('[id*=continue]').click();
    cy.get('div:contains("Checkout: Overview")').should('be.visible');
  //})

  //it('Checkout: Overview Page', () => {
    cy.get('div:contains("Sauce Labs Backpack")').should('be.visible');
    cy.get('div:contains("Payment Information:")').should('be.visible');
    cy.get('div:contains("Shipping Information:")').should('be.visible');
    cy.get('div:contains("Payment Information:")').should('be.visible');
    cy.get('[id*=finish]').click();
    cy.get('div:contains("Checkout: Complete!")').should('be.visible');
  //})

  //it('Checkout: Complete! Page', () => {
    cy.get('div:contains("Thank you for your order!")').should('be.visible');
    cy.get('div:contains("Checkout: Complete!")').should('be.visible');
    cy.get('[id*=back-to-product]').click();
    cy.get('div:contains("Swag Labs")').should('be.visible');
    cy.get('div:contains("Products")').should('be.visible');
  })

});