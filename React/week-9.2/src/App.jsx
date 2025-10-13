// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Card from './Components/Card.jsx'
import PropsExample from './Components/PropsExample.jsx'
import UseEffectExample from './Components/UseEffectExample.jsx'
function App() {
  return(
    <>
  <Card>
    <div>
     <p>hi there</p> 
    </div>
  </Card>

  {/* <PropsExample name={"prince"} age={"20"}></PropsExample> */}


  <UseEffectExample>  
    </UseEffectExample>
    
    </>
  )
}

export default App
