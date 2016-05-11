/**
 * 防抖和节流:
 * 当我们给 DOM 绑定事件的时候，加了防抖和节流的函数变得特别有用。
 * 因为我们在事件和函数执行之间加了一个控制层。记住，我们是无法控制 DOM 事件触发频率的。
 *
 * 1.直到事件停止快速执行以后，debounce 事件才会触发相应功能,防抖技术可以把多个顺序地调用合并成一次
 * 2.使用 _.throttle 的时候，只允许一个函数在 X 毫秒内执行一次。
 * 3.跟 debounce 主要的不同在于，throttle 保证 X 毫秒内至少执行一次。
 *
 * 根据经验，如果 JavaScript 方法需要绘制或者直接改变属性，我会选择 requestAnimationFrame ，只要涉及到重新计算元素位置，就可以使用它。
 * 涉及到 AJAX 请求，添加/移除 class （可以触发 CSS 动画），我会选择 _.debounce 或者 _.throttle ，可以设置更低的执行频率（例子中的200ms 换成16ms）。
 *
 *
 */

window.onload = function (e) {

    // // 错误
    // $(window).on('scroll', function () {
    //     _.debounce(doSomething, 300);
    // });

    // // 正确
    // $(window).on('scroll', _.debounce(doSomething, 200)    );

    function doSomething() {

        console.log(1);

    }

    // window.addEventListener('scroll', function () {

    //     _.debounce(doSomething, 300);

    // }, false);


    // window.addEventListener('scroll',


    //     _.debounce(doSomething, 300),


    //     false);



    window.addEventListener('scroll',


        _.throttle(doSomething, 300),


        false);






















}