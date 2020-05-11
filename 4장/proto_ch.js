var myObject = {
    name : 'foo',
    sayName : function () {
        console.log('My Name is ' + this.name);
    }
};

myObject.sayName();// "My Name is foo"
console.log(myObject.hasOwnProperty('name')); // ture
console.log(myObject.hasOwnProperty('nickName')); // false

//myObject 객체에는 hasOwnProperty가 없지만 제대로 수행되는 모습
//객체 리터럴로 생성한 객체는 프로토 타입 객체로 Object.prototype을 가르키고 있기 때문에 그 안에 있는 메서드인 hasOwnProperty가 프로토타입 체이닝으로 인해 실행된다.


function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var foo = new Person('a', 12, 'game');

console.log(foo.hasOwnProperty('name')); //ture

//foo에 hasOwnProperty가 없음 foo의 프로토 타입 객체인 Person.prototype가도 없음
//다시 Person.prototype의 프로토타입 객체인 Object.prototype으로 가서 hasOwnProperty을 찾아 메서드 실행
