// PROBLEM 11: Richest Customer Wealth


function maximumWealth(accounts: number[][]): number {
  if (!Array.isArray(accounts) || accounts.length === 0) {
    return 0;
  }

  let maxWealth = 0;

  
  for (const customerAccounts of accounts) {
    const currentCustomerWealth = customerAccounts.reduce(
      (sum, balance) => sum + balance,
      0
    );

    if (currentCustomerWealth > maxWealth) {
      maxWealth = currentCustomerWealth;
    }
  }

  return maxWealth;
}


// --- Test Problem 11 ---
console.log('example 1 Output');
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log('\n');

console.log('example 2 Output');
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log('\n');