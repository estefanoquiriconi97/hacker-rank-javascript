/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);

    let hashes = "#".repeat(i);

    console.log(spaces + hashes);
  }
}

staircase(6);
