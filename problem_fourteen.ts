// PROBLEM 14: Move Zeroes


function moveZeroes(nums: number[]): void {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }

  let nonZeroIndex = 0;

  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}


// --- Test Problem 14 ---
console.log('example 1 Output');
const p14Nums1 = [0, 1, 0, 3, 12];
moveZeroes(p14Nums1);
console.log(p14Nums1);
console.log('\n');

console.log('example 2 Output');
const p14Nums2 = [0, 0, 1];
moveZeroes(p14Nums2);
console.log(p14Nums2);
console.log('\n');

console.log('example 3 Output');
const p14Nums3 = [1, 2, 3];
moveZeroes(p14Nums3);
console.log(p14Nums3);
console.log('\n');

export {};