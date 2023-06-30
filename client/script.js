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
      document.getElementById('result').innerHTML = packet.type;
      break;
    case 'far':
      document.getElementById('result').innerHTML = packet.type;
      break;
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