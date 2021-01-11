// // https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

// //Solution: 01

// const modifiedSum = (a, n) => {
//   //Llevo mi array a elevarlo a la potencia n
//   const roots = a.map((sqrt) => sqrt ** n);
//   //Suma de mi array elevado a la potencia n
//   const sumaElevada = roots.reduce((a, b) => a + b, 0);
//   //Suma de todos los elementos de mi array
//   const sumaElementos = a.reduce((a, b) => a + b, 0);
//   //Diferencia-
//   const resultado = sumaElevada - sumaElementos;
//   // By: Rody Castillo
//   return resultado;
// };

//Solution: 02

// function modifiedSum(a, n) {
//   return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
// }
