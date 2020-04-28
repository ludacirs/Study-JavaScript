# 4장. 함수와 프로토타입 체이닝

## 함수

### 1. 함수의 생성

#### 함수를 생성하는 방법 3가지 ([func_const.js]())
1. 함수 선언문

2. 함수 표현식

3.  Function() 생성자 함수

#### 함수 호이스팅 ([func_hoisting.js]())

* 함수 호이스팅 때문에 함수 표현식을 사용한 함수 생성만을 사용할 것을 추천

### 2. 함수 객체 : 함수도 객체다

#### 함수도 객체 ([func_pro.js]())
* 함수도 일반 객체 처럼 프로퍼티를 동적으로 추가하는게 가능하다.

#### 함수는 값으로 취급된다 ([func_obj.js]())
* 자바스크립트에서 함수는 [일급 객체](https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4)로 취급된다.

1. 변수나 프로퍼티의 값으로 할당

2. 함수 인자로 전달

3. 리턴값으로 활용

#### 함수 객체의 기본 프로퍼티

* 함수 객체만의 표준 프로퍼티가 정의
     * 모든 함수는 length와 prototype 프로퍼티를 가짐 (나머지 프로퍼티는 ECMA표준이 아니다.)
     * \__proto\__ 프로퍼티 즉, 부모를 Function.prototype 객체라고 가르킴
        * Function.prototype 객체는 Empty() 함수로 정의되어 있다
        * Function.prototype는 함수이지만 자기 자신을 부모로 가르키지 않고 예외로 Object.prototype을 부모로 가르킴

1. length 프로퍼티

    함수가 정상적으로 실행될 때 기대되는 인수의 개수를 나타낸다.

2. prototype 프로퍼티
    
    * 객체의 부모를 나타내는 내부 프로퍼티인 \__proto\__와 헷갈리지 않기
    
    * prototype 프로퍼티는 함수 객체가 생성됨과 동시에 constructor 객체를 가르킨다.
        * construct 객체는 자신과 연결된 함수 객체를 가르킨다.
        따라
        서k
                prototype <----> constructor
          와 같은 상태 
          
#### 함수의 다양한 형태