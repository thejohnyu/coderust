let find_buy_sell_stock_prices = function (array) {
  if (!array || array.length < 2) {
    return
  }

  let current_buy = array[0]
  let global_sell = array[1]
  let global_profit = global_sell - current_buy

  let current_profit = 0

  for (let i = 1; i < array.length; i++) {
    current_profit = array[i] - current_buy

    if (current_profit > global_profit) {
      global_profit = current_profit
      global_sell = array[i]
    }

    if (current_buy > array[i]) {
      current_buy = array[i]
    }
  }

  return [global_sell - global_profit, global_sell]
}

console.log('')
console.log('')
console.log('+++++++++++++++++++++++++++++++++++++++')
console.log('Stock Prices')
console.log('---------------------------------------')

let array_for_stock_prices = [1, 2, 3, 4, 3, 2, 1, 2, 5]
let result = find_buy_sell_stock_prices(array_for_stock_prices)
console.log('Buy Price : ' + result[0] + ' Sell Price: ' + result[1])

array_for_stock_prices = [8, 6, 5, 4, 3, 2, 1]
result = find_buy_sell_stock_prices(array_for_stock_prices)
console.log('Buy Price : ' + result[0] + ' Sell Price: ' + result[1])
