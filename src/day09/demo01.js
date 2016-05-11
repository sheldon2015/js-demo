/**
 * 参考https://developer.mozilla.org/zh-CN/docs/Using_files_from_web_applications
 */



// Data URL能用在很多场合，跟传统的外部资源引用方式相比，它有如下独到的用处：

// 当访问外部资源很麻烦或受限时
// 当图片是在服务器端用程序动态生成，每个访问用户显示的都不同时。
// 当图片的体积太小，占用一个HTTP会话不是很值得时。
// Data URL也有一些不适用的场合

// Base64编码的数据体积通常是原数据的体积4/3，也就是Data URL形式的图片会比二进制格式的图片体积大1/3。
// Data URL形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次。这是一个使用效率方面的问题——尤其当这个图片被整个网站大量使用的时候。



document.querySelector('#file').addEventListener('change', function () {
    var file;
    var destination = document.querySelector('#destination');
    var progress_el = document.querySelector('.progress-inner');
    destination.innerHTML = '';

    // 循环用户多选的文件

    for (var x = 0, xlen = this.files.length; x < xlen; x++) {
        file = this.files[x];
        console.log(file.type);
        console.log('size: ' + file.size);
        console.log(file.type.indexOf('image'));

        if (file.type.indexOf('image') != -1) { // 非常简单的交验

            var reader = new FileReader();
            reader.onload = function (e) {
                var img = new Image();
                img.src = e.target.result; // 显示图片的地方
                destination.appendChild(img);
                console.log('load')
            };
            reader.onloadend = e => {
                console.log('loadend')

            }
            reader.onprogress = e => {
                console.log('progress')

                width = 100 * e.loaded / e.total + '%';
                progress_el.style.width = width;
            }
            reader.readAsDataURL(file);

        }
    }
});