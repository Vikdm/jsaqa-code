Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBookToFav", (bookName, description, author) => {
  cy.contains("Add new").click();
  cy.get("#title").type(bookName);
  cy.get("#description").type(description);
  cy.get("#authors").type(author);
  cy.get("#favorite").dblclick();
  cy.contains("Submit").click();
});