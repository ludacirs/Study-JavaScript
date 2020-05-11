

var foo = {
    name : 'foo'
};
var str = 'testing for extend';

console.log(str.testExtend());// error
console.log(foo.testExtend());// error


Object.prototype.testExtend = function () {
    console.log('testing extended method Object.prototpye');
};

String.prototype.testExtend = function () {
    console.log('testing extended method Object.prototpye');
};


console.log(str.testExtend());// "testing extended method Object.prototpye"
console.log(foo.testExtend());// "testing extended method Object.prototpye"