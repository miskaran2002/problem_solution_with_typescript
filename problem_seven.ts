// PROBLEM 7: Grasshopper — Summation


function summation(num: number): number {
  if (typeof num !== 'number' || num <= 0) {
    return 0;
  }

  return (num * (num + 1)) / 2;
}


// --- Test Problem 7 ---
console.log('example 1 Output');
console.log(summation(8));
console.log('\n');

console.log('example 2 Output');
console.log(summation(1));
console.log('\n');