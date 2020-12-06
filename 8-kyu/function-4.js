//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

//Solution: Nº01

// function arrayPlusArray(arr1, arr2) {
//     return  arr1.reduce((a, ac) => a + ac) + arr2.reduce((a, ac) => a + ac) ; //something went wrong
// }

//Solution: Nº02

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }

//Solution: Nº03

// function arrayPlusArray(arr1, arr2) {
//     var join = arr1.concat(arr2);
  
//     function getSum(a,b) {
//       return a+b;
//     }
//       return join.reduce(getSum);
//   }