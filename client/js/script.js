// WEBSOCKET

const webSocketPort = 443;

const socket = new WebSocket(`ws://localhost:${webSocketPort}`);

socket.onopen = function(event) {
  console.log(`[open] Connection established`);
  const message = JSON.stringify({
    type: 'client',
    content: 'Connection opened'
  });
  socket.send(message);
};

// receive a message from the server
socket.onmessage = function (event) {
  const packet = JSON.parse(event.data);  

  switch (packet.type) {
    case 'near':
      handleObjectInRange();
      break;
    // case 'far':
    //   handleObjectOutOfRange();
    //   break;
  }
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
  console.log(`[error] Connection error`);
};

window.addEventListener('beforeunload', function (e) {
  socket.close();
});

// GAME

const gameContainer = document.querySelector('.game-container');
const duckClassName = 'show-duck';

let duckTime;
let createdTime;
let reactionTime;
let timer;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function showDuck() {
  const randomNumber = generateRandomNumber(1, 3);
  let time = randomNumber * 1000;

  setTimeout(function() {
    gameContainer.classList.add(duckClassName);
    createdTime = Date.now();
  }, time); 
}

function handleObjectInRange() {
  if (!createdTime) return;

  duckTime = Date.now();
  reactionTime = (duckTime - createdTime) / 1000;
  gameContainer.classList.remove(duckClassName);
  createdTime = 0;
  showDuck();
}

showDuck(); 
