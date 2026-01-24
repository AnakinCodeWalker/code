import {WebSocketServer} from "ws"

//  this does not accepts a cb ..
const wss = new WebSocketServer({port: 3000})


// wss is for the server  , ws is for a single client..
wss.on("connection",(ws)=>{
    console.log(`connected to the client`);


ws.on("message",(msg)=>{
 const data = JSON.parse(msg.toString());
    console.log(data);


ws.send("hello from server")
})



ws.on("close", () => {
    console.log("Client disconnected");
  });

})




// is a web protocol like http
// scaling them is very tough compared to http one

// http request uses 3 way handshake it close the connection  when u got the response they are not presistent you have to create  a connection again when u want to send a request

// while websocket and webrtc is a persistent connection also a 3 way hand shake protocol one time a connection is made it stays there.



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