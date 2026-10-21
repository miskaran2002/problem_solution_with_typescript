// PROBLEM 20: Longest Common Prefix


function longestCommonPrefix(strs: string[]): string {
  if (!Array.isArray(strs) || strs.length === 0) {
    return '';
  }

 
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}


// --- Test Problem 20 ---
console.log('example 1 Output');
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log('\n');

console.log('example 2 Output');
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log('\n');

console.log('example 3 Output');
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
console.log('\n');

export {};