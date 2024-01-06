// Función para calcular el máximo común divisor
function maximoComunDivisor(a, b) {
    return b === 0 ? a : maximoComunDivisor(b, a % b);
}

// Función para calcular el mínimo común múltiplo
function minimoComunMultiplo(a, b) {
    return (a * b) / maximoComunDivisor(a, b);
}

// Función principal para ;determinar el número de enteros entre dos conjuntos
function obtenerCantidadEntreConjuntos(conjuntoA, conjuntoB) {
    // Encuentra el mínimo común múltiplo de todos los elementos en A
    const mcmA = conjuntoA.reduce(minimoComunMultiplo);

    // Encuentra el máximo común divisor de todos los elementos en B
    const mcdB = conjuntoB.reduce(maximoComunDivisor);

    // Encuentra cuántos múltiplos de mcmA son factores de mcdB
    let cantidad = 0;
    for (let i = mcmA; i <= mcdB; i += mcmA) {
        if (mcdB % i === 0) {
            cantidad++;
        }
    }

    return cantidad;
}

const conjuntoA = [2, 4];
const conjuntoB = [16, 32, 96];

const resultado = obtenerCantidadEntreConjuntos(conjuntoA, conjuntoB);
console.log(resultado);
