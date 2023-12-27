/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  let finalGrades = [];
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    if (grade < 38) {
      finalGrades.push(grade);
    } else {
      const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

      finalGrades.push(nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade);
    }
  }
  return finalGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));
