// PROBLEM 4: String Repeat


function repeatStr(n: number, s: string): string {
  if (typeof n !== 'number' || n <= 0 || typeof s !== 'string') {
    return '';
  }
 
  return s.repeat(n);
}


// --- Test Problem 4 ---
console.log('example 1 Output');
console.log(repeatStr(3, 'ha'));
console.log('\n');

console.log('example 2 Output');
console.log(repeatStr(0, 'hello'));
console.log('\n');

console.log('example 3 Output');
console.log(repeatStr(4, 'a'));
console.log('\n');