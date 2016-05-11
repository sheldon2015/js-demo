var form_el = document.querySelector('#myform');
form_el.addEventListener('click', function (e) {
    var oMyForm = new FormData();
    oMyForm.append("username", "Groucho");
    oMyForm.append("accountnum", 123456);
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "stash.php", true);
    oReq.send(oMyForm);
}, false)



