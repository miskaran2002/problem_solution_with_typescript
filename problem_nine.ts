// PROBLEM 9: Fizz Buzz


function fizzBuzz(n: number): string[] {
  if (typeof n !== 'number' || n <= 0) {
    return [];
  }

  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
   
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } 
    
    else if (i % 3 === 0) {
      result.push('Fizz');
    } 
   
    else if (i % 5 === 0) {
      result.push('Buzz');
    } 
    
    else {
      result.push(String(i));
    }
  }

  return result;
}


// --- Test Problem 9 ---
console.log('example 1 Output');
console.log(fizzBuzz(5));
console.log('\n');

console.log('example 2 Output');
console.log(fizzBuzz(15));
console.log('\n');