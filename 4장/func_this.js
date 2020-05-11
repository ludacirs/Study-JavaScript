var value = 100;

var myObject = {
    value : 1,
    func1 : function () {
        var that = this;

        this.value += 1;
        console.log('func1 called. this.value : ' + this.value);

        func2 = function () {
            that.value += 1;// 여기서 that을 사용하지않고 this.value로 사용할 경우 myObject가 아니라 전역 객체(window)로 바인딩되어  101이 출력
            console.log('func2 called. this.value : ' + that.value);    

            func3 = function () {
                that.value += 1;
                console.log('func3 called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1();