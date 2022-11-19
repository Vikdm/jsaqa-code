const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("TestsGoToMovie", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
  });

  test("The first test'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3) > span.page-nav__day-week");
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(2) > span:nth-child(2)");
    await clickElement(page,"body > main > section > button");
    await clickElement(page,"body > main > section > div > button");
    const actual = await getText(page, 'h2');
    await expect(actual).toContain("Электронный билет"); 
  });

  test("The second test'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3) > span.page-nav__day-week");
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(2)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(3)");
    await clickElement(page,"body > main > section > button");
    await clickElement(page,"body > main > section > div > button");
    const actual = await getText(page, 'h2');
    await expect(actual).toContain("Электронный билет"); 
  });

  test.only("Sad path test", async () => {
    await clickElement(page, "body > nav > a:nth-child(3) > span.page-nav__day-week");
    await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a")
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(2)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(3)");
    await clickElement(page, "body > main > section > button");
    const actual = await page.$eval("body > main > section > button", (element) => element.disabled);
    await expect(actual).toEqual(true);
  })
});
