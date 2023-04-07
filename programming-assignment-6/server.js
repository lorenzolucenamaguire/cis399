const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3005 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (data) => {
        console.log(`Received message: ${data}`);

        // Echo the message back to the client
        socket.send(data);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});