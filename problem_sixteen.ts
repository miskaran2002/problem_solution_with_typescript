// PROBLEM 16: 3Sum


function threeSum(nums: number[]): number[][] {
  if (!Array.isArray(nums) || nums.length < 3) {
    return [];
  }

  const result: number[][] = [];
  
  
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    
    if (nums[i] > 0) break;

    
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        
        while (left < right && nums[left] === nums[left + 1]) left++;
       
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}


// --- Test Problem 16 ---
console.log('example 1 Output');
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log('\n');

console.log('example 2 Output');
console.log(threeSum([0, 1, 1]));
console.log('\n');

console.log('example 3 Output');
console.log(threeSum([0, 0, 0]));
console.log('\n');

export {};