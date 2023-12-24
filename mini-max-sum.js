function miniMaxSum(arr) {
    // Ordenar la lista de números
    arr.sort((a, b) => a - b);

    // Calcular la suma total
    const totalSum = arr.reduce((acc, num) => acc + num, 0);

    // La suma mínima se obtiene restando el número más grande
    const minSum = totalSum - arr[arr.length - 1];

    // La suma máxima se obtiene restando el número más pequeño
    const maxSum = totalSum - arr[0];

    // Imprimir los resultados
    console.log(minSum + " " + maxSum);
}

const numbers = [5, 8, 10, 7, 3];

miniMaxSum(numbers);
