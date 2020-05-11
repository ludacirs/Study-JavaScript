// var foo = {
//     name: 'foo',
//     age : 35,
//     gender : 'man'
// }; //리터럴 방식의 객체 생성 프로토타입 객체가 Object를 가르킴
//
// console.dir(foo);
//
// var Person = function (name, age, gender, position) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// };
// console.dir(Person);
//
// var bar = new Person('bar', 33, 'woman');
//
// console.dir(bar);
// //함수 생성자 방식으로 객체 생성 프로토타입 객체가 Person함수를 가르킴
//
// var bx = Person('qx', 20, 'man');
//
// console.log(bx);
//new를 붙이지 않고 객체를 생성하게되면 전역 객체인(window)에 바인딩 되어 undefined가 출력

// console.log(window.name);
// console.log(window.age);
// console.log(window.gender);
// //윈도우 객체의 변수로 저장되어 윈도우 객체를 출력시 출력 가능
//
// function A(arg) {
//     if(!(this instanceof arguments.callee))
//         return new A;
//     this.value = arg ? arg : 0; // 삼항 연산자 arg가 ture 면 arg를 false면 0을 반환
// }// 위와 같은 상황을 방지하기 위해 new를 강제하는 패턴
//
// var a = new A(100);
// var b = A(10);
// //둘다 정상적으로 객체 생성됨

let foo = function(){
    this.name = "victolee"
}
let goo = function(){}
goo.prototype = new foo();
goo.prototype.constructor = goo;

let gooObj = new goo();
console.log(gooObj.name)
console.dir(gooObj)