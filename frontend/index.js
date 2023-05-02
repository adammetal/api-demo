function getUserName() {
  const name = window.prompt('Give your name!');
  return name;
}

async function getWelcomeMessage(name) {
  //const res = await fetch('/api/hello/' + name);
  //const welcome = await res.json();
  const response = await axios.get('/api/hello/' + name);
  return response.data.message; 
}

function renderWelcomeMessage(message) {
  const h1 = document.createElement('h1');
  document.querySelector('#root').append(h1);
  h1.innerText = message;
}

async function main() {
  const name = getUserName();
  const message = await getWelcomeMessage(name);
  renderWelcomeMessage(message);
}

main();
