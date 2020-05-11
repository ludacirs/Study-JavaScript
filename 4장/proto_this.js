function Person(name) {
    this.name = name;
}

var foo = new Person(foo);

Person.prototype.getName = function () {
    return this.name;
};

console.log(foo.getName()); //"foo"

Person.prototype.name = 'person';

console.log(Person.prototype.getName()); // "person"