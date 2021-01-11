// https://www.codewars.com/kata/550e9fd127c656709400024d/train/javascript

//Solution : 01

// const cubeSum = (num1, num2) => {
//   let acumulador = 0;
//   if (num1 === num2) {
//     return 0;
//   }
//   const inicio = num1 > num2 ? num2 : num1;
//   const fin = num1 > num2 ? num1 : num2;
//   for (let i = inicio + 1; i <= fin; i++) {
//     const powArr = Math.pow(i, 3);
//     acumulador = acumulador + powArr;
//   }
//   return acumulador;
// };

//Solution: 02

// function cubeSum(n, m){
//   var f = function(k){return k*k*(k+1)*(k+1)/4;};
//   return Math.abs(f(n) - f(m));
// }
