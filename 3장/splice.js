var arr = ['one', 'two', 'three', 'four', 'five'];

delete arr[1];
console.log(arr); //['one', undefinded, 'three', 'four', 'five'];
console.log(arr.length); // 5

arr.splice( 3, 1);

console.log(arr); //['one', undefinded, 'three', 'five'];
console.log(arr.length); // 4
