// bookingUrlBuilder.js

/**
 * Creates a Booking.com hotel search URL using given parameters.
 * It smartly includes only provided values.
 * @param {Object} options - Partial or full search parameters.
 * @returns {string} - A valid Booking.com search URL.
 */
export class BookingUrlBuilder {
  private baseUrl = "https://www.booking.com/searchresults.html";
  private defaultParams = {
    lang: "en-us",
    aid: "304142",
  };

  buildUrl(options: Record<string, any> = {}): string {
    const finalParams = { ...this.defaultParams, ...options };
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(finalParams)) {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, String(value));
      }
    }

    return `${this.baseUrl}?${queryParams.toString()}`;
  }
}

/*
🔽 === USAGE EXAMPLES === 🔽

// 👉 Import the function
import createBookingSearchURL from './bookingUrlBuilder.js';

// ✅ 1. Full parameter set
const fullURL = createBookingSearchURL({
  ss: "srilanka",
  ssne: "New Delhi",
  ssne_untouched: "New Delhi",
  efdco: "1",
  lang: "en-us",
  aid: "304142",
  sb: "1",
  src_elem: "sb",
  src: "index",
  dest_id: "198",
  dest_type: "country",
  ac_position: "0",
  ac_click_type: "b",
  ac_langcode: "en",
  ac_suggestion_list_length: "5",
  search_selected: "true",
  search_pageview_id: "721947cb14b60457",
  ac_meta: "GhA3MjE5NDdjYjE0YjYwNDU3IAAoATICZW46CXNyaWxhbmthIEAASgBQAA==",
  checkin: "2025-06-11",
  checkout: "2025-06-14",
  group_adults: "1",
  no_rooms: "2",
  group_children: "1",
  age: "7"
});
console.log(fullURL);

// ✅ 2. Minimal required parameters
const shortURL = createBookingSearchURL({
  ss: "kandy",
  checkin: "2025-07-01",
  checkout: "2025-07-05"
});
console.log(shortURL);

// ✅ 3. Only location
const locationOnlyURL = createBookingSearchURL({
  ss: "colombo"
});
console.log(locationOnlyURL);
*/
