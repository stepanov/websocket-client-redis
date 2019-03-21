# websocket-client-redis

Simple Node.js websocket and Redis client

## Installing

    npm install

## Configuration

Copy .env.example into .env and put websocket server and Redis credentials there. 

## Run

### Single node

    node server.js

or 

    nodemon server.js

### Run with PM2

    pm2 start server.js

PM2 gives ability to monitor, restart application automatically, create cluster.
