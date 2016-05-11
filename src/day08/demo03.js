/**     箭头函数this的特点
 * 
 * 箭头函数里的this始终指向箭头函数定义时的this
 * 箭头函数中的this所引用的对象在定义时就固定
 * 所谓箭头函数的this无法改变,指的是引用关系无法改变，并不是说值不变
 * 箭头函数的this始终指向外层函数的this这个关系是不变的
 */



var x = 1;
alert(this);//window,箭头函数定义时的this是widow对象
var o = {
    x: 10,
    test: () => {

        console.log(this);

        return this.x;//所以他始终指向window
    }
};


console.log(o.test()); // 1

console.log(o.test.call(o)); // 依然是1

console.log(o.test.call({ x: 10000 }))// 依然是1

var o = {
    x: 10,
    test: function () {

        return (() => {

            console.log(this.x);

        })()
    }
};

o.test();
o.test.call({ x: 2 })






