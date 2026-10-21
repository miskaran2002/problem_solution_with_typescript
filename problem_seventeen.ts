// PROBLEM 17: Plus One


function plusOne(digits: number[]): number[] {
  if (!Array.isArray(digits) || digits.length === 0) {
    return [];
  }

  
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    
    digits[i] = 0;
  }

  
  digits.unshift(1);
  return digits;
}


// --- Test Problem 17 ---
console.log('example 1 Output');
console.log(plusOne([1, 2, 9]));
console.log('\n');

console.log('example 2 Output');
console.log(plusOne([4, 3, 2, 1]));
console.log('\n');

console.log('example 3 Output');
console.log(plusOne([9, 9, 9]));
console.log('\n');

export {};