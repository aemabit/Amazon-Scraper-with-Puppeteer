const amazonJob = require("./amazonJob");

let MacBookPrLink = 'https://www.amazon.com/dp/B081FV1Y57/ref=fs_a_mb_3?th=1'

const amazon = async () => {
  await amazonJob.initialize();
  let details = await amazonJob.getProductDetails(MacBookPrLink)

  debugger;
};

amazon();
