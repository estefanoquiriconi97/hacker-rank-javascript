let array = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positives = 0,
    negatives = 0,
    zeros = 0;
  let amount = arr.length;

  for (let i = 0; i < amount; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }
  console.log((positives / amount).toFixed(6));
  console.log((negatives / amount).toFixed(6));
  console.log((zeros / amount).toFixed(6));
}

plusMinus(array);
