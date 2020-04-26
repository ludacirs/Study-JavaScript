var a = 100;
var b = 100;

var objA = { val : 100};
var objB = { val : 100};

var objC = objB;

console.log(a == b) // true
console.log(objA == objB) // false , val의 값은 같지만 참조값이 다르기 때문에 false
console.log(objC == objB) // true

