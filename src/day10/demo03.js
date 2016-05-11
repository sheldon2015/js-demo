document.querySelector('#fetch').addEventListener('click', function (e) {
    fetch('./data.json', {
        method: 'get'
    }).then(function (response) {
        console.log(response)
    }).catch(function (err) {
        console.log(err)
    });
}, false)