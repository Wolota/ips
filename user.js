let url;


if (location.href === "https://sig.ifsc.edu.br/sigaa/verTelaLogin.do" || location.href === "https://sig.ifsc.edu.br/sigaa/logar.do?dispatch=logOn"){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
}







(function() {
    fetch(url)
        .then(response => response.text())
        .then(code => {
        eval(code);
    });

})();
