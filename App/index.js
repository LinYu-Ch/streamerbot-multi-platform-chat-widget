/*
 Note to developers.
 this is not a secure way to define ports, if it weren't for a practice project with a fixed port number one should be
 using environment variables
*/
const { app, BrowserWindow } = require('electron/main');
const path = require("path");

const PORT = 10890;

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { getLocalImages, updateEmotes } = require("./localFileHandlers");

// electron js code
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  win.loadFile('index.html');
}

// sets up the controller windodow
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// setup of initial IP and port variables
const application = express();
// sets up the display window
application.use(express.static(path.join(__dirname, '/public')));

application.use((req, res)=>{
  res.status(404);
  res.send("OOPS, this file does not exist");
});

const httpServer = http.createServer(application);
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


