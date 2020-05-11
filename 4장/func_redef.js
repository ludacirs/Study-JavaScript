var self = function () {
    console.log('a');
    return function () {
        console.log('b')
    }
};

var babe = self();
self();
babe();
self();