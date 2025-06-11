import { BaseScraper } from "../../core/BaseScraper.js";
import { ScrapingOptions, ScrapingResult } from "../../interfaces/IScraper.js";
import { BookingUrlBuilder } from "./BookingUrlBuilder.js";

export class BookingScraper extends BaseScraper {
  private urlBuilder: BookingUrlBuilder;

  constructor() {
    super("booking");
    this.urlBuilder = new BookingUrlBuilder();
  }

  async scrape(options: ScrapingOptions): Promise<ScrapingResult> {
    if (!this.validateOptions(options)) {
      throw new Error("Invalid scraping options");
    }

    const startTime = Date.now();
    //const url = this.urlBuilder.buildUrl(options);

    const url = "https://www.booking.com/searchresults.html?ss=srilanka+&ssne=New+Delhi&ssne_untouched=New+Delhi&efdco=1&label=gen173bo-1FCAEoggI46AdIM1gDaMkBiAEBmAExuAEYyAEM2AEB6AEB-AECiAIBmAICqAIEuAKXraXCBsACAdICJDJlNmMxYjc2LWVjZjktNDk3Ni1hNDAxLTE1ZmM2MDVkYTk1YdgCBeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=198&dest_type=country&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=721947cb14b60457&ac_meta=GhA3MjE5NDdjYjE0YjYwNDU3IAAoATICZW46CXNyaWxhbmthIEAASgBQAA%3D%3D&checkin=2025-06-11&checkout=2025-06-14&group_adults=1&no_rooms=2&group_children=1&age=7"

    try {
      if (!this.page) {
        throw new Error("Page not initialized");
      }

      await this.page.goto(url, { waitUntil: "networkidle0" });

      // Wait for the main container to load
      await this.page.waitForSelector("#bodyconstraint-inner", {
        timeout: 10000,
      });

      // Additional wait for dynamic content
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const results = await this.page.evaluate(() => {
        // Find all property cards using multiple possible selectors
        const cardSelectors = [
          '[data-testid="property-card"]',
          ".sr_property_block",
          ".sr-card",
          '[data-testid="property-card-container"]',
          ".bui-card",
        ];

        const cards = document.querySelectorAll(cardSelectors.join(","));

        return Array.from(cards).map((card) => {
          // Title selectors
          const titleSelectors = [
            '[data-testid="title"]',
            ".sr-hotel__name",
            ".bui-card__title",
            ".sr-card__title",
          ];

          // Location selectors
          const locationSelectors = [
            '[data-testid="address"]',
            ".sr-hotel__location",
            ".bui-card__subtitle",
            ".sr-card__location",
          ];

          // Price selectors
          const priceSelectors = [
            '[data-testid="price-and-discounted-price"]',
            ".prco-wrapper",
            ".bui-price-display",
            ".sr-card__price",
          ];

          // Room info selectors
          const roomSelectors = [
            '[data-testid="property-card-unit-configuration"]',
            ".room-info",
            ".bui-card__content",
            ".sr-card__room-info",
          ];

          // Helper function to find first matching element
          const findElement = (selectors: string[]) => {
            for (const selector of selectors) {
              const element = card.querySelector(selector);
              if (element) return element;
            }
            return null;
          };

          // Basic info with fallback selectors
          const name = findElement(titleSelectors)?.textContent?.trim();
          const location = findElement(locationSelectors)?.textContent?.trim();

          // Price info with fallback selectors
          const priceElement = findElement(priceSelectors);
          const price = priceElement?.textContent?.trim();
          const originalPrice = priceElement
            ?.querySelector(
              ".d68334ea31, .prco-wrapper .prco-valign-middle-helper"
            )
            ?.textContent?.trim();

          // Room info with fallback selectors
          const roomElement = findElement(roomSelectors);
          const roomType = roomElement?.textContent?.trim();
          const bedInfo = roomElement
            ?.querySelector(".fff1944c52, .room-info__bed-type")
            ?.textContent?.trim();

          // Deal info with fallback selectors
          const dealElement = card.querySelector(
            '[data-testid="property-card-deal"], .sr-card__deal, .bui-card__deal'
          );
          const deal = dealElement?.textContent?.trim();

          // Payment info with fallback selectors
          const paymentElement = card.querySelector(
            '[data-testid="prepayment-policy-icon"], .sr-card__payment-info, .bui-card__payment-info'
          );
          const paymentInfo = paymentElement
            ?.closest("li")
            ?.textContent?.trim();

          // Image URL with fallback selectors
          const imageSelectors = [
            '[data-testid="image"]',
            ".sr-card__image",
            ".bui-card__image",
            'img[src*="booking.com"]',
          ];
          const imageUrl = findElement(imageSelectors)?.getAttribute("src");

          // URL with fallback selectors
          const urlSelectors = [
            '[data-testid="title-link"]',
            ".sr-card__title-link",
            ".bui-card__title-link",
            'a[href*="booking.com/hotel"]',
          ];
          const url = findElement(urlSelectors)?.getAttribute("href");

          return {
            name,
            location,
            price: {
              current: price,
              original: originalPrice,
            },
            room: {
              type: roomType,
              beds: bedInfo,
            },
            deal,
            paymentInfo,
            imageUrl,
            url,
          };
        });
      });

      const executionTime = Date.now() - startTime;

      return {
        provider: this.name,
        timestamp: new Date().toISOString(),
        data: results,
        metadata: {
          totalResults: results.length,
          executionTime,
        },
      };
    } catch (error) {
      this.logger.error("Error scraping Booking.com", error);
      throw error;
    }
  }

  validateOptions(options: ScrapingOptions): boolean {
    if (!super.validateOptions(options)) {
      return false;
    }

    if (options.checkIn && !this.isValidDate(options.checkIn)) {
      this.logger.error("Invalid check-in date format");
      return false;
    }

    if (options.checkOut && !this.isValidDate(options.checkOut)) {
      this.logger.error("Invalid check-out date format");
      return false;
    }

    return true;
  }

  private isValidDate(dateStr: string): boolean {
    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date.getTime());
  }
}
