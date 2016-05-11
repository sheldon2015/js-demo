window.onload = function () {

    //可以获得file对象的基本信息
    // lastModified:1461627515688
    // lastModifiedDate:Tue Apr 26 2016 07:38:35 GMT+ 0800(中国标准时间)
    // name:"52.0.2716.0.manifest"
    // size:248      文件大小,单位为字节,只读的64位整数.
    // type: "image/jpeg"   MIME类型,只读字符串,如果类型未知,则返回空字符串
    // webkitRelativePath:""




    //一个Blob对象就是一个包含有只读原始数据的  类文件对象,file基于blob接口

    var file_el = document.querySelector('#file');
    file_el.addEventListener('change', (e) => {
        for (var index = 0; index < e.target.files.length; index++) {
            var el = e.target.files[index];
            console.log(el);
        }

    }, false)
    var file2_el = document.querySelector('#file2');
    var select_el = document.querySelector('#select');
    file2_el.click();
    select_el.addEventListener('click', e => {
        file2_el.click();
    }, false)

}