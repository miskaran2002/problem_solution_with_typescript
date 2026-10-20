// PROBLEM 6: Sum of Positive


function positiveSum(arr: number[]): number {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  
  return arr.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
}


// --- Test Problem 6 ---
console.log('example 1 Output');
console.log(positiveSum([1, -4, 7, 12]));
console.log('\n');

console.log('example 2 Output');
console.log(positiveSum([-1, -2, 0, -5]));
console.log('\n');