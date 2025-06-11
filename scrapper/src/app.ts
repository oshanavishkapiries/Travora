import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { BookingScraper } from "./providers/booking/BookingScraper.js";
import { Logger } from "./utils/logger.js";
import { ScrapingOptions } from "./interfaces/IScraper.js";

dotenv.config();

const app = express();
const logger = new Logger("app");
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Initialize scrapers
const scrapers = new Map([["booking", new BookingScraper()]]);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Scraping endpoint
app.post("/scrape/:provider", async (req, res) => {
  const { provider } = req.params;
  const options: ScrapingOptions = req.body;

  const scraper = scrapers.get(provider);
  if (!scraper) {
    return res.status(404).json({ error: `Provider ${provider} not found` });
  }

  try {
    await scraper.initialize();
    const result = await scraper.scrape(options);
    await scraper.close();
    res.json(result);
  } catch (error) {
    logger.error(`Error scraping ${provider}`, error);
    res.status(500).json({ error: "Scraping failed" });
  }
});

// List available providers
app.get("/providers", (req, res) => {
  res.json({
    providers: Array.from(scrapers.keys()),
  });
});

// Start server
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
