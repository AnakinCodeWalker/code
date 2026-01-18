//https://chatgpt.com/share/696cbe8a-7714-800f-a265-aa1cdef26740

/*
import {WebSocket} from 'ws'
*/

//  this creates  a ws server
import {WebSocketServer} from 'ws'

//  create  an instance of the websocker server

const wss =  new WebSocketServer({port:3000})

//  as soon as client creates a connection the cb executes.
wss.on( "connection",(socket)=>{
console.log("client connected ");


socket.on('message',(message)=>{
    console.log(`message is ${message}`);
})

// socket.once('message', (msg) => {
//   console.log('First message only')
// })

socket.on('close',()=>{
    console.log(`Client  disconnected ..`);
})
})
