function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor); // Person(name)을 가르킴

var foo = new Person('foo');

console.log(foo.country); //undefined

Person.prototype = {
    country : 'korea'
};

console.log(Person.prototype.constructor);// Object()를 가르킴

var bar = new Person('bar');
console.log(foo.country); // undefined
console.log(bar.country); // "korea"
console.log(foo.constructor); // Person(name)
console.log(bar.constructor); // Object()