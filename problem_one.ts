
// PROBLEM 1: Staircase


function staircase(n: number): string {
  if (typeof n !== 'number' || n <= 0) {
    return '';
  }

  const resultRows: string[] = [];
  for (let i = 1; i <= n; i++) {
    const spaces: string = ' '.repeat(n - i);
    const hashes: string = '#'.repeat(i);
    resultRows.push(spaces + hashes);
  }

  return resultRows.join('\n');
}

// --- Test Problem 1 ---
console.log('example 1 Output');
console.log(staircase(4));
console.log('\n');

console.log('example 2 Output ');
console.log(staircase(1));
console.log('\n');