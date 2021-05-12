// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  const p = document.createElement('p');
  const div = document.querySelector('#jokeContainer');

  p.innerHTML = joke;
  div.appendChild(p);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((json) => {
      appendJoke(json.joke);
    });
};

window.onload = () => fetchJoke();

