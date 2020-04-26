# 3장. 자바스크립트 데이터 타입과 연산자

## 객체

### 1. 자바스크립트에서의 객체 생성
 1. 기본 제공 Object()를 이용하는 방법 (used_object.js)
 2. 객체 리터럴을 이용하는 방법 (used_literal.js)
 3. 생성자 함수를 이용하는 방법

### 2. 프로퍼티
* 마침표 표기법, 대괄호 표기법
* 프로퍼티 삭제는 가능, 객체 삭제는 불가능


### 3. 참조 타입
[reference_type.js](https://github.com/ludacirs/Study-JavaScript/blob/master/3%EC%9E%A5/reference_tpye.js)

### 4. 비교
[compare.js](https://github.com/ludacirs/Study-JavaScript/blob/master/3%EC%9E%A5/compare.js)

### 5. 호출 방식 
<u>[call.js]()</u>

### 6. 프로토타입
* 자바스크립트의 모든 객체는 자신의 프로토타입을 가르키는 \__proto\__라는 숨겨진 프로퍼티를 가지고 있다.

* 리터럴 방식으로 객체를 생성할 때 Object.prototype 객체가 프로토타입 객체가 된다.

___

## 배열

### push(), length
[push_length.js]()

### 배열과 객체
배열 -> Array.prototype -> Object.prototype
객체 -> Object.prototype

### 배열의 프로퍼티 삭제
[splice.js]()


---

#### ==(동등) 연산자와 ===(일치) 연산자의 차이점, !!연린산자

\== 연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거친 다음 비교

\=== 연산자는 피연산자의 타입이 다를 경우에 타입을 변경하지 않고 비교

\!!는 피연산자를 불값으로 변환시켜 준다 

#### null과 undefined
* null은 값이 비어있음

(null타입은 tpyeof 연산자가 아닌 '=== null'을 사용해서  직접 확인이 필요)
* undefinded는 할당되지 않은 타입이자, 값

#### NaN (Not a Number)
 NaN은 수치 연산을 해서  정상적인 값을 얻지 못할 때 출력되는 값.
 