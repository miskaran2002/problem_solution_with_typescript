// PROBLEM 15: Merge Sorted Array


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1; 
  let p2 = n - 1; 
  let p = m + n - 1; 

  
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}


// --- Test Problem 15 ---
console.log('example 1 Output');
const p15Nums1_1 = [1, 2, 3, 0, 0, 0];
merge(p15Nums1_1, 3, [2, 5, 6], 3);
console.log(p15Nums1_1);
console.log('\n');

console.log('example 2 Output');
const p15Nums1_2 = [1];
merge(p15Nums1_2, 1, [], 0);
console.log(p15Nums1_2);
console.log('\n');

console.log('example 3 Output');
const p15Nums1_3 = [0];
merge(p15Nums1_3, 0, [1], 1);
console.log(p15Nums1_3);
console.log('\n');

export {};