var sum = function () {
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];//인자 형식을 정해 놓지 않고 넘어온 인자들을 다 더함
    }
    return result;
};

