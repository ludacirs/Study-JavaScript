var parent = function () {
    var a = 100;
    var b = 200;

    var child = function () {
        b = 300;
        console.log("a");
        console.log("b");
    };
    return child();
};

