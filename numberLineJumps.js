/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        // Si ambos canguros tienen la misma velocidad, nunca se encontrarán.
        return "NO";
    }

    // Calcula el número de saltos necesarios para que los canguros se encuentren.
    const jumps = (x2 - x1) / (v1 - v2);

    // Comprueba si el número de saltos es un número entero positivo.
    if (jumps >= 0 && Number.isInteger(jumps)) {
        return "YES";
    } else {
        return "NO";
    }
}
