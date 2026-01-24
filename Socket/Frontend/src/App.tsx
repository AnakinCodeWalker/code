
import { useEffect, useState } from 'react'
import './App.css'
import ButtonComponent from './Components/Button.tsx'
function App() {

  const [socket ,setSocket ]= useState<WebSocket|null>(null)

  useEffect(() => {
   const ws = new WebSocket("ws://localhost:3000")
   

  ws.onmessage=(env)=>{
alert(env.data)
  }

//  is triggered when the WebSocket connection is established.
// writing this logic directly outside another hook  
ws.onopen = () => {
      setSocket(ws);
    };

    //cleanup logic
    return () => {
    ws.close();
  };
  }, [])
  

  return (
    <>
    {/* passing the socket as props to use it in the function */}
<ButtonComponent socket={socket}>

</ButtonComponent>


    </>
  )
}

export default App
