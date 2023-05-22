const coins = [1, 2, 5];
const amount = 11;
  
  function coinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    let count = 0;
  
    for (let coin of coins) {
      while (coin <= amount) {
        amount -= coin;
        count++;
      }
    }
  
    return amount === 0 ? count : -1;
}

console.log(coinChange(coins, amount)); 
  