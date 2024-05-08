import * as object from "./object/page.js"

//before(() =>{
  //cy.config("defaultComandTimeout",20000);
//});

describe('template spec', () => {   
  it('Success Login', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(object.input_username).type("standard_user");
    cy.get(object.input_password).type("secret_sauce");
    cy.get(object.btn_login).click();
    cy.get(object.home_page).should("be.visible");
  });
});