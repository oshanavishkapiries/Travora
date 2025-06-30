const express = require('express');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const app = express();
const port = 3333;

app.get('/', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send('URL parameter is required');
  }

  let browser;
  try {
    browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    
    await Promise.all([
      page.goto(targetUrl, { waitUntil: 'domcontentloaded' }),
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }).catch(() => {})
    ]);
    
    await page.waitForSelector('body', { timeout: 10000 });
    
    // Get page data after render
    const pageData = await page.evaluate(() => {
      return {
        html: document.documentElement.outerHTML,
        title: document.title,
        url: window.location.href,
        timestamp: new Date().toISOString()
      };
    });
    
    await browser.close();
    res.json(pageData);
  } catch (error) {
    console.error(error);
    if (browser) await browser.close();
    res.status(500).send('Error scraping the website');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
