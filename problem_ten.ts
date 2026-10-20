// PROBLEM 10: Running Sum of 1D Array


function runningSum(nums: number[]): number[] {
  if (!Array.isArray(nums)) {
    return [];
  }

  let currentSum = 0;

  return nums.map((num) => {
    currentSum += num;
    return currentSum;
  });
}


// --- Test Problem 10 ---
console.log('example 1 Output');
console.log(runningSum([1, 2, 3, 4]));
console.log('\n');

console.log('example 2 Output');
console.log(runningSum([1, 1, 1, 1, 1]));
console.log('\n');