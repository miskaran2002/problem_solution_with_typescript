// PROBLEM 18: Reverse String


function reverseString(s: string[]): void {
  if (!Array.isArray(s) || s.length <= 1) {
    return;
  }

  let left = 0;
  let right = s.length - 1;

  
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}


// --- Test Problem 18 ---
console.log('example 1 Output');
const p18S1 = ["h", "e", "l", "l", "o"];
reverseString(p18S1);
console.log(p18S1);
console.log('\n');

console.log('example 2 Output');
const p18S2 = ["H", "a", "n", "n", "a", "h"];
reverseString(p18S2);
console.log(p18S2);
console.log('\n');

export {};