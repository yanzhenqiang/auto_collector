import { chromium } from "playwright";

const run = async function () {
  const waitUntil = "networkidle";

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  const pageGoto = async function () {
    const page = await context.newPage();
    try {
      await page.goto("https://colab.research.google.com/drive/1FNFybCI5yFhS2vMkXqw4zais6sdQ22Xe", { waitUntil });
    } catch (error) {
      console.log(error);
    } finally {
      await page.close();
    }
  };

  await pageGoto();
  await browser.close();
};

run();
