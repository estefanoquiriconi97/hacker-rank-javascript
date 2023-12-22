matrix = [[1, 2, 3], [4, 5, 6], [7, 9, 8]];

function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let diagonalDifference;

  for (let i = 0; i < arr.length; i++) {
      primaryDiagonal += arr[i][i];
      secondaryDiagonal += arr[i][arr.length - 1 - i];
  }

  diagonalDifference = primaryDiagonal - secondaryDiagonal;
  return Math.abs(diagonalDifference);
}

console.log(diagonalDifference(matrix));
