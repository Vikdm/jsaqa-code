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
    await clickElement(page, "a:nth-child(3)");
    await clickElement(page, 'a[data-seance-id="129"')
    await clickElement(page, "div:nth-child(2) > span:nth-child(2)");
    await clickElement(page,'button[class="acceptin-button"]');
    await clickElement(page,"button");
    const actual = await getText(page, 'h2');
    await expect(actual).toContain("Электронный билет"); 
  });

  test("The second test'", async () => {
    await clickElement(page, "a:nth-child(3)");
    await clickElement(page, 'a[data-seance-id="129"')
    await clickElement(page, "div:nth-child(3) > span:nth-child(2)");
    await clickElement(page, "div:nth-child(3) > span:nth-child(3)");
    await clickElement(page,'button[class="acceptin-button"]');
    await clickElement(page,"button");
    const actual = await getText(page, 'h2');
    await expect(actual).toContain("Электронный билет"); 
  });

  test.only("Sad path test", async () => {
    await clickElement(page, "a:nth-child(3)");
    await clickElement(page, 'a[data-seance-id="129"')
    await clickElement(page, "div:nth-child(3) > span:nth-child(2)");
    await clickElement(page, "div:nth-child(3) > span:nth-child(3)");
    await clickElement(page,'button[class="acceptin-button"]');
    const actual = await page.$eval("button", (element) => element.disabled);
    await expect(actual).toEqual(true);
  })
});
