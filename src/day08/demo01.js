
/**
 * ajax原生方法*
 */

// xhr.readyState状态对应的信息  (ps在有的浏览器中可能没有0，1，2几个状态，所以有兼容性问题)
// 0：请求未初始化（还没有调用 open() ）。
// 1：请求已经建立，但是还没有发送（还没有调用 send() ）。
// 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
// 3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
// 4：响应已完成；您可以获取并使用服务器的响应了。
// open()：建立到服务器的新请求。
// send()：向服务器发送请求。
// abort()：退出当前请求。
// readyState：提供当前 HTML 的就绪状态。
// responseText：服务器返回的请求响应文本。

function loadByAjax() {

    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    };

    console.log(xhr.readyState);

    var progress_inner_el = document.querySelector('.progress-inner');

    xhr.onreadystatechange = function () {

        switch (xhr.readyState) {
            case 0:
                console.log('请求未初始化');
                console.log(xhr.status);
                console.log(xhr.responseText);
                break;
            case 1:
                console.log('服务器连接已建立')
                console.log(xhr.status);
                console.log(xhr.responseText);
                progress_inner_el.style.width = '25%';


                break;
            case 2:
                console.log('请求已接收')
                console.log(xhr.status);
                console.log(xhr.responseText);
                progress_inner_el.style.width = '50%';


                break;
            case 3:
                console.log('请求处理中')
                console.log(xhr.status);
                console.log(xhr.responseText);
                progress_inner_el.style.width = '75%';


                break;
            case 4:
                console.log('请求已完成，且响应已就绪')
                console.log(xhr.status);
                console.log(xhr.responseText);
                progress_inner_el.style.width = '100%';


                break;

            default:
                console.log('111111')
                console.log(xhr.status);
                console.log(xhr.responseText);
                break;
        }


    }
    xhr.open('get', './data.json?t=' + new Date().getTime(), true);//建立连接
    // xhr.open('post', 'http://www.baidu.com', true);
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.send("fname=Henry&lname=Ford");
    xhr.send();


}


