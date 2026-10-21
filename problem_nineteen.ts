// PROBLEM 19: Length of Last Word


function lengthOfLastWord(s: string): number {
  if (typeof s !== 'string') {
    return 0;
  }

  
  const words = s.trim().split(/\s+/);

  if (words.length === 0 || words[0] === '') {
    return 0;
  }

  return words[words.length - 1].length;
}


// --- Test Problem 19 ---
console.log('example 1 Output');
console.log(lengthOfLastWord('Hello World'));
console.log('\n');

console.log('example 2 Output');
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log('\n');

console.log('example 3 Output');
console.log(lengthOfLastWord('luffy is still joyboy'));
console.log('\n');

export {};