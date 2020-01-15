const puppeteer = require("puppeteer");

let browser = null;
let page = null;

const BASE_URL = "https://www.amazon.com/";

const amazonJob = {
  initialize: async () => {
    console.log("Starting the scraper...");

    browser = await puppeteer.launch({
      headless: false
    });

    page = await browser.newPage();
    await page.goto(BASE_URL, { waitUntil: "networkidle2" });

    console.log("Initialization completed...");
  },

  getProductDetails: async link => {
    console.log(`Going to the product page...( ${link} )`);
    await page.goto(link, { waitUntil: "networkidle2" });

    let details = await page.evaluate(() => {
      let title = document.querySelector("#productTitle").innerText;
      let manufacture = document.querySelector("#bylineInfo").innerText;
      let price = document.querySelector("#priceblock_ourprice, #priceblock_dealprice").innerText;
      let rating = document.querySelector("#acrPopover").getAttribute("title");
      let countReview = document.querySelector("#acrCustomerReviewText")
        .innerText;

      return {
        title,
        manufacture,
        price,
        rating,
        countReview
      };
    });

    return details;
  },

  end: async () => {
    console.log("Stopping the scraper...");
    await browser.close;
  }
};

module.exports = amazonJob;
