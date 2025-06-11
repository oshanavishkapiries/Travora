import { Browser } from "puppeteer";

export interface ScrapingOptions {
  location: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  rooms?: number;
  currency?: string;
}

export interface ScrapingResult {
  provider: string;
  timestamp: string;
  data: any;
  metadata: {
    totalResults?: number;
    pageCount?: number;
    executionTime: number;
  };
}

export interface IScraper {
  name: string;
  initialize(): Promise<void>;
  scrape(options: ScrapingOptions): Promise<ScrapingResult>;
  validateOptions(options: ScrapingOptions): boolean;
  getBrowser(): Promise<Browser>;
  close(): Promise<void>;
}
