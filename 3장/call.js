var a = 100;
var objA = {value : 100};


function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);
console.log(a);// 값이 바뀌지 않음
console.log(objA);//그대로