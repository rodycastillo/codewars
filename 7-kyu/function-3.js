// https://www.codewars.com/kata/printer-errors/train/javascript

//Solution: Nº01

// var printerError= function(s) {
//     var count = 0;
//     for (var i = 0; i < s.length; i++) {
//       if (s.charCodeAt(i) > 109) {
//         count++;
//       }
//     }
//     return count + "/" + s.length;
//   }


//Solution: Nº02

// function printerError(s) {
//     return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
//   }