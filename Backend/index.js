/*
 Note to developers.
 this is not a secure way to define ports, if it weren't for a practice project with a fixed port number one should be
 using environment variables
*/

// setup of initial IP and port variables
const PORT = 10890;

// importing required APIs
const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();
const socketServer = new Server(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Socket.IO server is active on host: ${HOST}, port ${PORT}`);
  }
);

socketServer.on("connection", (socket) => {
  console.log("Connection established");
});
