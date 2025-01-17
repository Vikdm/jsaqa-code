let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.setDefaultTimeout(60000);
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});


describe("Github page tests ver. 2", () => {
  
  test("About Github", async () => {
    await page.goto("https://github.com/about")
    await page.waitForSelector("h1");
    const aboutTitle = await page.title();
    expect(aboutTitle).toEqual("About · GitHub");
  });

  test("About Careers Github", async () => {
    await page.goto("https://github.com/about/careers")
    await page.waitForSelector("h1");
    const aboutTitle = await page.title();
    expect(aboutTitle).toEqual("GitHub Careers · GitHub");
  });

  test("Enterprise Github", async () => {
    await page.goto("https://github.com/enterprise")
    await page.waitForSelector("h1");
    const aboutTitle = await page.title();
    expect(aboutTitle).toEqual("Enterprise · A smarter way to work together · GitHub");
  });
});