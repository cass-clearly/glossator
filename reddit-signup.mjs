import puppeteer from 'puppeteer-core';

const sleep = ms => new Promise(r => setTimeout(r, ms));

console.log('Starting browser with DISPLAY:', process.env.DISPLAY);

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: false,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--start-maximized'
  ]
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });

console.log('Navigating to Reddit signup...');
await page.goto('https://www.reddit.com/account/register/', { waitUntil: 'networkidle2', timeout: 30000 });
await sleep(3000);

await page.screenshot({ path: '/tmp/reddit-1.png' });
console.log('Page loaded. URL:', page.url(), '| Title:', await page.title());

// Look for email field
const emailSelectors = ['#regEmail', 'input[name="email"]', 'input[type="email"]', 'input[data-testid="register-email"]'];
let emailField = null;
for (const sel of emailSelectors) {
  emailField = await page.$(sel);
  if (emailField) { console.log('Email field found with:', sel); break; }
}

if (emailField) {
  await emailField.click({ clickCount: 3 });
  await sleep(300);
  await emailField.type('traderankai@tutamail.com', { delay: 80 });
  await sleep(800);
  await page.screenshot({ path: '/tmp/reddit-2.png' });
  console.log('Email entered');

  // Find and click Continue
  const btnSelectors = [
    'button[type="submit"]',
    '.AnimatedForm__submitButton',
    'button[data-step="email"]',
    'button:not([disabled])',
  ];
  
  let btn = null;
  for (const sel of btnSelectors) {
    const buttons = await page.$$(sel);
    for (const b of buttons) {
      const text = await page.evaluate(el => el.textContent.trim(), b);
      console.log('Button found:', text);
      if (text.toLowerCase().includes('continu') || text.toLowerCase().includes('next') || text.toLowerCase().includes('sign')) {
        btn = b;
        console.log('Using button:', text);
        break;
      }
    }
    if (btn) break;
  }

  if (btn) {
    await btn.click();
    await sleep(4000);
    await page.screenshot({ path: '/tmp/reddit-3.png' });
    console.log('After continue click. URL:', page.url());
    
    // Now try to fill username
    const usernameField = await page.$('#regUsername, input[name="username"], input[data-testid="register-username"]');
    if (usernameField) {
      console.log('Username field found!');
      await usernameField.click({ clickCount: 3 });
      await usernameField.type('TradeRankAI', { delay: 80 });
      await sleep(500);
      
      // Fill password
      const pwField = await page.$('#regPassword, input[name="password"], input[type="password"]');
      if (pwField) {
        await pwField.click({ clickCount: 3 });
        await pwField.type('TradeRank2026!Secure', { delay: 80 });
        await sleep(500);
      }
      
      await page.screenshot({ path: '/tmp/reddit-4.png' });
      console.log('Username/password filled');
    } else {
      // Maybe we went straight to username step
      console.log('No username field yet. Page source sample:', (await page.content()).substring(0, 500));
    }
  } else {
    console.log('No button found. Page HTML sample:');
    const content = await page.content();
    console.log(content.substring(0, 1000));
  }
} else {
  console.log('No email field found. Checking page...');
  const content = await page.content();
  console.log('Page content sample:', content.substring(0, 1500));
}

await sleep(5000);
await page.screenshot({ path: '/tmp/reddit-final.png' });
await browser.close();
console.log('Done. Screenshots at /tmp/reddit-*.png');
