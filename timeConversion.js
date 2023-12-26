/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let hour = parseInt(s.slice(0, 2));
  const minute = s.slice(3, 5);
  const second = s.slice(6, 8);
  const period = s.slice(8, 10);

  // Manejo de PM y ajuste de la hora
  hour = period === "PM" && hour < 12 ? hour + 12 : hour;

  // Manejo especial de 12 PM
  hour = period === "PM" && hour === 12 ? 12 : hour;

  // Manejo especial de 12 AM

  hour = period === "AM" && hour === 12 ? "00" : hour;

  // Asegurar ceros a la izquierda
  hour = hour.toString().padStart(2, "0");

  return `${hour}:${minute}:${second}`;
}

console.log(timeConversion("09:05:45AM"));
