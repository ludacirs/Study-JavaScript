//변수에 함수 할당
var bar = function() { return 100;};

console.log(bar());// 100


//obj객체의 프로퍼티에 함수 할당
var obj = {};
obj.baz = function () {
    return 200;
};

console.log(obj.baz());// 200


//------------------------------------------

var foo = function (func) {
    func;
};

//foo함수 실행
foo(//foo 함수의 인자에 아래의 익명 함수를 넘긴 상태
    function () {
    console.log('Function can be used as the argument.')
}
);

//------------------------------------------

var foo = function () {
    //foo 함수의 리턴 값에 아래의 익명 함수를 반환하도록 한 상태
    return function () {
        console.log('this function is the return value.')
    }
};

var bar = foo();
bar();