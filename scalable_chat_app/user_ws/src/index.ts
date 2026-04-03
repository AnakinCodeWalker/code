import { WebSocketServer } from "ws";

const wss : WebSocketServer = new WebSocketServer({port:3000})

const clients :[] =[]

interface Room{
    sockets:WebSocket[]
}

const rooms:Record<string,Room> ={

}

wss.on('connection',(socket,req)=>{

    clients.push()
    const url = req.url ;
    // const params = URLSearchParams()

    socket.send("connected to client ..")



    socket.on('close',()=>{
    console.log(`disconnected from the client`);
})

})

