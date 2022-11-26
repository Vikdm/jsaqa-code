it("Should successfully login", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Тест добавления книги в избранное", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addBookToFav("Гарри Поттер", "Мальчик со шрамом против чего-то", "Дж. Роулинг");
  cy.contains("Favorites").click();
  cy.contains("Гарри Поттер").should("be.visible");
});

it("Тест удаления книги из избранного", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addBookToFav("Властелин Колец", "Путешествие с кольцом для его уничтожения", "Дж. Р. Р. Толкин");
  cy.contains("Favorites").click();
  cy.contains("Властелин Колец").contains("Delete from favorite").click();
});

it("Тест скачивание книги из избранного", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addBookToFav("Ведьмак", "Путешествие ведьмака", "А. Сапковский");
  cy.contains("Favorites").click();
  cy.contains("Ведьмак").click();
  cy.contains("Dowload book").should("be.visible");
});