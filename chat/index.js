const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var time = new Date()
function Get() {console.log((new Date())-time)}
var count = 0
var messages = ["<ins style='color:red'>This is the very first message!</ins>"]
//for(i=0;i<100;i++) {messages.push(i)}
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});
io.on("connection", (socket) => {
  Check()
  Send(socket,messages.length)
  console.log('connection')
  socket.on('disconnect', () => {
    Check()
    console.log('disconnection')
  });
  socket.on('message', (e) => {
    messages.push(e)
    io.emit('chat', e)
  });
  socket.on('confidential', (e) => {
    io.emit('chat', e)
  });
  socket.on('load', (e) => {
    Update(socket,e)
  });
});
function Check() {
  var j = io.engine.clientsCount
  if(j!=count) {io.emit('number',j);count=j}
}
function Send(socket,index) {
  socket.emit('start',[index-50,messages.slice(index-50,index)])
}
function Update(socket,index) {
  socket.emit('update',messages.slice(index-50,index))
}
