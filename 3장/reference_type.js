var objA = {
   val : 40
};

var objB = objA;

console.log(objA);
console.log(objB);
//출력값 둘다  40

objB.val = 50;

console.log(objA);
console.log(objB);
//출력값 둘다  50