// PROBLEM 13: Contains Duplicate


function containsDuplicate(nums: number[]): boolean {
  if (!Array.isArray(nums) || nums.length <= 1) {
    return false;
  }

 
  const uniqueElements = new Set(nums);
  return uniqueElements.size !== nums.length;
}


// --- Test Problem 13 ---
console.log('example 1 Output');
console.log(containsDuplicate([1, 2, 3, 1]));
console.log('\n');

console.log('example 2 Output');
console.log(containsDuplicate([1, 2, 3, 4]));
console.log('\n');

console.log('example 3 Output');
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log('\n');