const WebSocket = require("ws");  //https://github.com/websockets/ws
const ws = new WebSocket("ws://localhost:8099");
const stream = WebSocket.createWebSocketStream(ws);
stream.write("hello\n");
stream.pipe(process.stdout);
