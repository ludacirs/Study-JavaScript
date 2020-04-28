function add(x, y) {
    return x+ y;
}

add.result = add(3,2);
add.status = 'OK';
//add() 함수 객체에 result, status 프로퍼티 추가.

console.log(add.result); // 5
console.log(add.status); // 'OK'

