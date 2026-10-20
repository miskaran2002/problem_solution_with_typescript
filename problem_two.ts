// PROBLEM 2: Grading Students


function gradingStudents(grades: number[]): number[] {
  if (!Array.isArray(grades)) {
    return [];
  }

  return grades.map((grade) => {
    
    if (grade < 38) {
      return grade;
    }

    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
    const difference = nextMultipleOfFive - grade;

    if (difference < 3) {
      return nextMultipleOfFive;
    }

    return grade;
  });
}


// --- Test Problem 2 ---
console.log('example 1 Output');
console.log(gradingStudents([73, 67, 38, 33]));
console.log('\n');

console.log('example 2 Output');
console.log(gradingStudents([84, 29, 57]));
console.log('\n');