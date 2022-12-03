const data = require("../fixtures/data.json");
describe("Main page test", () => {
  it("Seven days", () => {
    cy.visit("/");
    data.forEach((data) => {
      cy.get(data.days).should("have.length", 7);
    });
  });

  it("Movie", () => {
    cy.visit("/");
    data.forEach((data) => {
      cy.get(data.films).should("have.length", 2);
    });
  });

  it("Header", () => {
    cy.visit("/");
    data.forEach((data) => {cy.get(data.h1).should("have.text", "Идёмвкино")});
  });
});

describe("Admin page test", () => {
  it("Positive log in test", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");
    const login = require("../fixtures/login.json");
    login.forEach((login) => {
      data.forEach((data) => {cy.get(data.post).type(login.email)});
      data.forEach((data) => {cy.get(data.psw).type(login.password)});
    });
    cy.contains("Авторизоваться").click();
    cy.wait(1000);
    cy.contains("Администраторррская").should("to.be.visible");
  });

  it("Positive log in test", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");
    const login = require("../fixtures/loginbad.json");
    login.forEach((login) => {
      data.forEach((data) => {cy.get(data.post).type(login.email)});
      data.forEach((data) => {cy.get(data.psw).type(login.password)});
    });
    cy.contains("Авторизоваться").click();
    cy.wait(1000);
    cy.contains("Ошибка авторизации!").should("to.be.visible");
  });
});

describe("Buy tickets", () => {
  it.skip("Buy tickets", () => {
    cy.visit("/");
    data.forEach((data) => {cy.get(data.date).click()});
    data.forEach((data) => {cy.contains(data.time).click()});
    data.forEach((data) => {cy.get(data.seat1).click()});
    data.forEach((data) => {cy.get(data.seat2).click()});
    cy.contains('Забронировать').click();
    cy.contains('Получить код бронирования').click();
    cy.contains("Электронный билет").should("to.be.visible");
    data.forEach((data) => {cy.get(data.tickets).should("have.text", "3/1, 3/2")});
  });
});