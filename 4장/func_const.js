
//함수 선언문 방식
function add(x, y){ //반드시 함수 명이 정의되어 있어야 함.
    return x + y;
}

console.log(add(3, 4)) // 7

//--------------------------------------------------------------------------

//함수 표현식 방식
var add = function (x, y) {// add는 익명 함수를 참조하는 변수. 함수 이름이 아님.
    return x+ y;
};

var plus = add; //plus, add 둘 다 동일한 익명 함수를 참조

console.log(add(3, 4)) // 7
console.log(plus(5, 6)) // 11

//--------------------------------------------------------------------------

//기명 함수 표현식
var add= function sum (x, y) { //여기서의 sum은 재귀호출이나 디버깅에서만 사용된다, 외부 코드에서 접근이 불가능.
    return x+y;
};

console.log(add(3,5)) //8
console.log(sum(3,5)) // error 외부 코드에서 접근이 불가능 하기 때문에 에러.

//--------------------------------------------------------------------------

// Function() 생성자 함수를 이용

var add = new Function('x', 'y' , 'return x + y');

console.log(add(3, 4)) // 7
