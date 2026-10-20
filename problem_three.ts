// PROBLEM 3: Time Conversion


function timeConversion(s: string): string {
  if (!s || typeof s !== 'string') {
    return '';
  }

  const modifier = s.slice(-2);
  
  const timeWithoutModifier = s.slice(0, -2);
  let [hoursStr, minutes, seconds] = timeWithoutModifier.split(':');

  let hours = parseInt(hoursStr, 10);

  if (modifier === 'AM') {
   
    if (hours === 12) {
      hours = 0;
    }
  } else if (modifier === 'PM') {
    
    if (hours !== 12) {
      hours += 12;
    }
  }

  
  const formattedHours = String(hours).padStart(2, '0');

  return `${formattedHours}:${minutes}:${seconds}`;
}


// --- Test Problem 3 ---
console.log('example 1 Output');
console.log(timeConversion('07:05:45PM'));
console.log('\n');

console.log('example 2 Output');
console.log(timeConversion('12:00:00AM'));
console.log('\n');

console.log('example 3 Output');
console.log(timeConversion('12:30:45PM'));
console.log('\n');