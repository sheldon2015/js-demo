/**
 *
 *
 *
 *
 *
 *
 */

// var globalId;
// window.requestAnimFrame = (function () {
//     return window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||

//         function (callback, element) {
//             globalId = window.setTimeout(callback, 1000 / 60);
//             return globalId;
//         };
// })();


// var canvas, context, toggle;
// init();


// document.querySelector('#start').addEventListener('click', function (e) {

//     animate();

// }, false);

// document.querySelector('#stop').addEventListener('click', function (e) {

//     cancelAnimationFrame(globalId);

// }, false);

// function init() {

//     canvas = document.createElement('canvas');
//     canvas.width = 512;
//     canvas.height = 512;
//     context = canvas.getContext('2d');
//     document.body.appendChild(canvas);
// }

// function animate() {
//     globalId = requestAnimFrame(animate);
//     draw();
// }

// function draw() {
//     var time = new Date().getTime() * 0.002;
//     var x = Math.sin(time) * 192 + 256;
//     var y = Math.cos(time * 0.9) * 192 + 256;
//     toggle = !toggle;
//     context.fillStyle = toggle ? 'rgb(200,200,20)' : 'rgb(20,20,200)';
//     context.beginPath();
//     context.arc(x, y, 10, 0, Math.PI * 2, true);
//     context.closePath();
//     context.fill();
// }



/**
 * 封装了requestAnimationFrame方法
 */


(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {

        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];

        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {

        window.requestAnimationFrame = function (callback, element) {

            var currTime = new Date().getTime();

            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));

            var id = window.setTimeout(function () {

                callback(currTime + timeToCall);

            }, timeToCall);

            lastTime = currTime + timeToCall;

            return id;
        };
    }
    if (!window.cancelAnimationFrame) {

        window.cancelAnimationFrame = function (id) {

            clearTimeout(id);
        };
    }
} ());

var globalId;
var el_num = document.querySelector('#num');
// 其中：
// t: current time（当前时间）；
// b: beginning value（初始值）；
// c: change in value（变化量）；
// d: duration（持续时间）。
var b = 50, c = 18000, d = 2000, t = 0;

var fn = function () {

    console.log(1)
    el_num.textContent = Math.floor(Tween.Bounce.easeOut(t, b, c, d));

    if (t < d) {

        t++;

        globalId = requestAnimationFrame(fn);
    }


}


document.querySelector('#start').addEventListener('click', function (e) {

    globalId = requestAnimationFrame(fn);


})
document.querySelector('#stop').addEventListener('click', function (e) {


    cancelAnimationFrame(globalId);

})