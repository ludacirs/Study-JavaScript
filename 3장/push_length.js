var arr =[ 'zero', 'one', 'two']

arr.push('three');

console.log(arr);
//[ 'zero', 'one', 'two', 'three']

arr.length = 5;

arr.push('four');

console.log(arr);
//[ 'zero', 'one', 'two', 'three', undefinded, 'four']