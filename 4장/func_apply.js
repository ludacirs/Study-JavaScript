var Person = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

var foo ={};

Person.apply(foo, ['aa', 12, 'male']);
//Person('aa', 12, 'male')를 호출해서 this를 foo에 바인딩하는 코드

Person.call(foo, 'aa', 12, 'male');
//call은 apply와 기능은 같지만 배열로 넘기지않고 인자로 하나씩 넘긴다
