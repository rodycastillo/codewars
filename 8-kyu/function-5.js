// https://www.codewars.com/kata/expressions-matter/train/javascript

//Solution: Nº01

// var expressionMatter= function(a,b,c) {
// 	var aux1= a * b * c;
// 	var aux2= a + b + c;
// 	var aux3= a + b * c;
// 	var aux4= a * b + c;
// 	var aux5= (a + b) * c;
// 	var aux6= a * (b + c);
// 	return Math.max(aux1,aux2,aux3,aux4,aux5,aux6);
// }

//Solution: Nº02

// function expressionMatter(a, b, c) {
//     return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
//   }

//Solution: Nº03

// const expressionMatter=(a,b,c)=>Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);