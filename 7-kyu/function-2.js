//https://www.codewars.com/kata/find-the-divisors/train/javascript

//Solution: Nº01

// var divisors= function(integer){
//     var arr=[];
//     for (var i= integer-1; i >1; i--){
//       if ((integer/i) % 1 == 0){
//           arr.push(integer/i);
//       }
//     }
//     if (arr.length == 0){
//       return integer + ' is prime';
//     }
//     return arr;
//   }


//Solution: Nº02

// function divisors(integer) {
//     for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
//     return div.length > 0 ? div : integer + " is prime";
//   }