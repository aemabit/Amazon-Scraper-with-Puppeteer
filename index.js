const amazonJob = require("./amazonJob");

const amazon = async () => {
  await amazonJob.initialize();
  let details = await amazonJob.getProductDetails('https://www.amazon.com/POGT-Sleeve-Blazer-Cardigan-Mustard/dp/B01M7S9QBJ?th=1&psc=1')

  debugger;
};

amazon();
