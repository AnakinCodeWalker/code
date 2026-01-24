
import { useEffect, useState } from 'react'
import './App.css'
import ButtonComponent from './Components/Button.tsx'
function App() {

  const [socket ,setSocket] = useState(null)

  useEffect(() => {
   const ws = new WebSocket("ws://localhost:3000")
   

  ws.onmessage=(env)=>{
alert(env.data)
  }

     setSocket(ws)
  }, [])
  

  return (
    <>
<ButtonComponent socket={socket}>

</ButtonComponent>


    </>
  )
}

export default App
