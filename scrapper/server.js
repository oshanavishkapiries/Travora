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

  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });
    const html = await page.content();
    
    await browser.close();
    res.send(html);
  } catch (error) {
    res.status(500).send('Error scraping the website');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});