// PROBLEM 12: Remove Duplicates from Sorted Array


function removeDuplicates(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
   
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}


// --- Test Problem 12 ---
console.log('example 1 Output');
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(`k = ${k1}, unique elements =`, nums1.slice(0, k1));
console.log('\n');

console.log('example 2 Output');
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(`k = ${k2}, unique elements =`, nums2.slice(0, k2));
console.log('\n');