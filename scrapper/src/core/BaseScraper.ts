import { Browser, BrowserContext, Page } from "puppeteer";
import PuppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import {
  IScraper,
  ScrapingOptions,
  ScrapingResult,
} from "../interfaces/IScraper.js";
import { Logger } from "../utils/logger.js";

const puppeteer = PuppeteerExtra.default;
puppeteer.use(StealthPlugin());

export abstract class BaseScraper implements IScraper {
  protected browser: Browser | null = null;
  protected context: BrowserContext | null = null;
  protected page: Page | null = null;
  protected logger: Logger;

  constructor(public readonly name: string) {
    this.logger = new Logger(name);
  }

  async initialize(): Promise<void> {
    try {
      this.browser = await this.getBrowser();
      this.context = await this.browser.createBrowserContext();
      this.page = await this.context.newPage();
      await this.page.setViewport({ width: 1920, height: 1080 });
      this.logger.info("Scraper initialized successfully");
    } catch (error) {
      this.logger.error("Failed to initialize scraper", error);
      throw error;
    }
  }

  async getBrowser(): Promise<Browser> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: false,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    }
    return this.browser;
  }

  abstract scrape(options: ScrapingOptions): Promise<ScrapingResult>;

  validateOptions(options: ScrapingOptions): boolean {
    if (!options.location) {
      this.logger.error("Location is required");
      return false;
    }
    return true;
  }

  async close(): Promise<void> {
    try {
      if (this.page) await this.page.close();
      if (this.context) await this.context.close();
      if (this.browser) await this.browser.close();
      this.logger.info("Scraper closed successfully");
    } catch (error) {
      this.logger.error("Error closing scraper", error);
      throw error;
    }
  }

  protected async retry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000
  ): Promise<T> {
    let lastError: Error | null = null;

    for (let i = 0; i < maxRetries; i++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        this.logger.warn(`Retry attempt ${i + 1} failed`, error);
        if (i < maxRetries - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError;
  }
}
