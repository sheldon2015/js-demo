

// var demo = document.querySelectorAll('.demo');//得到的是数组
var demo = document.getElementsByClassName("demo");//  NodeList 对象，不是数组对象
console.log(demo);

//slice()方法可以将具有length属性的对象转为数组对象
[].slice.call(demo).forEach(function (el) {
    console.log(el)

}, this);
demo.forEach(function (el) {
    console.log(el)

}, this);





