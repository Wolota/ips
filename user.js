let url;


if (location.href === ""){
    url = ""
}

(function() {
    fetch(url)
        .then(response => response.text())
        .then(code => {
        eval(code);
    });

})();
