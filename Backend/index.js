/*
 Note to developers.
 this is not a secure way to define ports, if it weren't for a practice project with a fixed port number one should be
 using environment variables
*/

// setup of initial IP and port variables
const PORT = 10890;

// importing required APIs
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { getLocalImages, updateEmotes } = require("./localFileHandlers");

const app = express();
const httpServer = http.createServer(app);
const socketServer = new Server(httpServer, {
  cors:{
    origin: "http://localhost:5173", // Allow your client origin
    methods: ["GET", "POST"],
  },
  connectionStateRecovery: {}
});

httpServer.listen(PORT, () => console.log(`Socket.IO server is active on port ${PORT}`));

socketServer.on("connection", (socket) => {
  console.log("Connection established", socket.id);
  socket.emit("staticData", getLocalImages());  
  // wow this is horrible nesting - TODD 
  socket.on("control", (obj)=>{
    console.log("control object received", obj.eventType);
    socketServer.of("").sockets.forEach((socket) => {
      socket.emit("command", obj);
    });
  });

  socket.on("emotes", (obj)=>{
    updateEmotes(obj);
  })

});


