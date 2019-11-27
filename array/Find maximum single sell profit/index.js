let find_buy_sell_stock_prices = function(array) {
  if (!array || array.length < 2) {
    return;
  }

  let currentBuy = array[0];
  let globalSell = array[1];
  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < array.length; i++) {
    const currentNumber = array[i];
    currentProfit = currentNumber - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = currentNumber;
    }

    if (currentBuy > currentNumber) {
      currentBuy = currentNumber;
    }
  }

  return [globalSell - globalProfit, globalSell];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Stock Prices");
console.log("---------------------------------------");

let array_for_stock_prices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = find_buy_sell_stock_prices(array_for_stock_prices);
console.log("Buy Price : " + result[0] + " Sell Price: " + result[1]);

array_for_stock_prices = [8, 6, 5, 4, 3, 2, 1];
result = find_buy_sell_stock_prices(array_for_stock_prices);
console.log("Buy Price : " + result[0] + " Sell Price: " + result[1]);

const findMinMaxProfit = arr => {
  if (arr.length < 2 || !arr.length) return;
  // Reminder we always want to buy at the lowest price and sell at the highest price
  // Formula Profit = Sell - Buy
  let globalBuy = globalSell - globalProfit;
  let globalSell = arr[1];
  let globalProfit = global_sell - currentBuy; // take a look at currentProfit (notice the formulas are the same)

  let currentBuy = arr[0];
  let currentProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSell = arr[i]; // smallest number seen
    currentProfit = currentSell - currentBuy;

    if (currentProft > globalProfit) {
      // This validates that each element is greater than our running total
      globalSell = currentSell;
      globalProfit = currentProfit;
    }

    // ensures that we are buying at the lowest rate
    // We never ever want to do a buisness were we are paying more than we are selling, so if that is the case, we should update the buying price to the selling price.
    if (currentBuy > currentSell) {
      currentBuy = currentSell;
    }
  }

  return [globalBuy, globalSell];
};
