import puppeteer from "puppeteer-core";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: false,
  args: ["--no-sandbox", "--disable-gpu", "--start-maximized"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });

await page.goto("https://www.reddit.com/register/", { waitUntil: "networkidle2", timeout: 30000 });
await sleep(4000); // extra wait for React hydration

await page.screenshot({ path: "/tmp/reddit2-1.png" });

// Get ALL input fields and their attributes
const inputs = await page.$$eval("input", (els) =>
  els.map((el) => ({
    id: el.id,
    name: el.name,
    type: el.type,
    placeholder: el.placeholder,
    ariaLabel: el.getAttribute("aria-label"),
    className: el.className.substring(0, 80),
  })),
);
console.log("All inputs found:", JSON.stringify(inputs, null, 2));

// Get all buttons
const buttons = await page.$$eval("button", (els) =>
  els.map((el) => ({
    text: el.textContent.trim().substring(0, 50),
    type: el.type,
    disabled: el.disabled,
    className: el.className.substring(0, 60),
  })),
);
console.log("All buttons found:", JSON.stringify(buttons, null, 2));

// Try typing into first available input
if (inputs.length > 0) {
  const firstInput = await page.$("input");
  if (firstInput) {
    await firstInput.click({ clickCount: 3 });
    await sleep(300);
    await firstInput.type("traderankai@tutamail.com", { delay: 80 });
    await sleep(1000);
    await page.screenshot({ path: "/tmp/reddit2-2.png" });
    console.log("Typed email into first input");

    // Find and click Continue button
    const allBtns = await page.$$("button");
    for (const b of allBtns) {
      const txt = await page.evaluate((el) => el.textContent.trim(), b);
      const disabled = await page.evaluate((el) => el.disabled, b);
      console.log(`Button: "${txt}" disabled:${disabled}`);
      if (!disabled && txt.toLowerCase().includes("continu")) {
        await b.click();
        console.log("Clicked Continue!");
        await sleep(4000);
        await page.screenshot({ path: "/tmp/reddit2-3.png" });
        console.log("After continue. URL:", page.url());
        break;
      }
    }
  }
}

// Check current state
const inputs2 = await page.$$eval("input", (els) =>
  els.map((el) => ({
    id: el.id,
    name: el.name,
    type: el.type,
    placeholder: el.placeholder,
  })),
);
console.log("Inputs after continue:", JSON.stringify(inputs2, null, 2));

await sleep(3000);
await page.screenshot({ path: "/tmp/reddit2-final.png" });
await browser.close();
console.log("Done");
