var Person  = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return {
        name:'bar',
        age:20,
        gender:'female'
    };//객체를 리터럴방식으로 생성한 후에 반환
};

var foo = new Person('foo', 19, 'male');

console.dir(foo);
// 이 경우엔 생성자 함수로 생성한 객체의 이름인 foo가 출력되지 않고 함수 안에있는 리터럴로 생성된 객체인 name이 bar인 객체가 반환되어 출력된다.

var Person  = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
};

var foo = new Person('foo', 19, 'male');

console.dir(foo);
// 객체가 아닌 숫자, 문자열, 불린같은 경우에는 리턴값을 무시하고 생성한 객체를 반환하게 된다.