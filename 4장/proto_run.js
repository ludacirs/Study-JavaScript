function Person(name) {
    this.name = name;
}

Person.prototype.country = 'Korea'; //Person.prototype 객체에 country = Korea 프로퍼티를 추가

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country); // 프로토타입 체이닝이 일어나면서 Person.prototype.country의 Korea를 참조
console.log(bar.country); // 프로토타입 체이닝이 일어나면서 Person.prototype.country의 Korea를 참조
foo.country = 'USA'; // 프로토타입 체이닝이 아닌 foo객체에 동적으로 country = USA 프로퍼티를 추가

console.log(foo.country); //foo객체의 country의 USA 출력
console.log(bar.country); // 프로토타입 체이닝이 일어나면서 Person.prototype.country의 Korea를 참조