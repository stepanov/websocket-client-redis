const Websocket = require('ws');

const client = new Websocket('ws://localhost:8080');

client.on('message', (data) => {
    console.log(data);
});
