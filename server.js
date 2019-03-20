require('dotenv').config();

const Websocket = require('ws');
const Redis = require('redis');

const HOST = process.env.WS_HOST || 'localhost';
const PORT = process.env.WS_PORT || 8080;

const wsClient = new Websocket('ws://' + HOST + ':' + PORT);

wsClient.on('open', () => {
    console.log('Open connection ...');
});

wsClient.on('close', () => {
    console.log('Close connection ...');
});

wsClient.on('error', (e) => {
    console.log('Connection error: ' + e);
});

wsClient.on('message', (data) => {
    let msg = JSON.parse(data);
    console.log(msg.value);
    redisClient.rpush(['myList', msg.value], (error, reply) => {
        console.log(reply);
    });
});

const redisClient = new Redis.createClient({
    port: process.env.REDIS_PORT, 
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD 
}); 
redisClient.on('connect', () => {
    console.log('Redis client connected');
});

redisClient.on('error', (err) => {
    console.log('Something went wrong ' + err);
});
