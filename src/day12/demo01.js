window.onload = function (e) {
    // 其中：
    // t: current time（当前时间）；
    // b: beginning value（初始值）；
    // c: change in value（变化量）；
    // d: duration（持续时间）。
    var b = 50, c = 800, d = 4000, t =new Date().getTime();
    var el = document.querySelector("#test");
    function run() {
        el.style.top = Math.floor(Tween.Bounce.easeOut(new Date().getTime()-t, b, c, d)) + "px";
        if (new Date().getTime() -t< d) {  setTimeout(run, 13) }

    }

    document.querySelector("#test").addEventListener('click', function (e) {
        run();
    }, false)
}