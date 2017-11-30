console.log("setting up web server...");
const WebSocket = require('ws');
var server = require('http').createServer();

const wss = new WebSocket.Server({server: server});

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.send("Connection built, welcome!");
  console.log("connection built");
  ws.on('message', function incoming(data) {
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
      if (client.readyState === WebSocket.OPEN) {
        console.log("sending data " + data)
        client.send(data);
      }
    });
  });
});

server.listen(8080, function () {
    console.log('Listening on http://localhost:8080');
});