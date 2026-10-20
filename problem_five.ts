// PROBLEM 5: Reversed Strings


function solution(str: string): string {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}


// --- Test Problem 5 ---
console.log('example 1 Output');
console.log(solution('world'));
console.log('\n');

console.log('example 2 Output');
console.log(solution('hello'));
console.log('\n');

console.log('example 3 Output');
console.log(solution(''));
console.log('\n');