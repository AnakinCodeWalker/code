import {WebSocketServer ,WebSocket} from "ws"

//  this does not accepts a cb ..
const wss = new WebSocketServer({port: 3000})


// wss is for the server  , ws is for a single client..
wss.on("connection",(Socket : WebSocket)=>{
    console.log(`connected to the client`);


Socket.on("message",(msg : JSON | string)=>{
 const data = JSON.parse(msg.toString());
    console.log(data);


Socket.send("hello from server")
})



Socket.on("close", () => {
    console.log("Client disconnected");
  });

})




// is a web protocol like http ,full duplex communication.. uses tcp 
// scaling them is very tough compared to http one

// http request uses 3 way handshake it close the connection  when u got the response they are not presistent you have to create  a connection again when u want to send a request it also uses tcp 

// while websocket and webrtc is a persistent connection also a 3 way hand shake protocol one time a connection is made it stays there.

// for real time communications ws  is used.

//  because ws is able to perform  2 way communication , that is why we use it in chat  application here server can send it.

// u could do the same with http but u will need long polling. clients can keep polling



/*

 wss.clients
 wss.clients = { ws1, ws2, ws3 }
 --> isme sare clients object hote hai  

   client.readyState
 
 --> Ye batata hai connection ka status
   Connection open hai ya close ho chuka hai

   client.OPEN

 -->   Ye ek constant number hota hai
   Meaning: connection fully open hai
 
   */