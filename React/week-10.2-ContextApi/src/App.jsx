import { useState } from 'react'
import ContextApi from './component/ContextApi'
import './App.css'
import { createContext } from "react"
// for propDrilling...
// import PropDrilling from './component/PropDrilling'


// THIS IS ROLLING UP THE STATE.

// usually props are passed from parent to child.
// we can pass props child to parent but u should not.

// if something is need in the child just define it into parent and pass via prop -without ContextApi



// rolling up the state or prop drilling


// 1. context api
const BulbContext = createContext()
function App() {
const [bulb,setBulb]=useState(false)
  return <div>
    <LightBulb />
               {/* <PropDrilling/> */}
    
    {/* 2. wrapping up the component with the createContext() */}
 <BulbContext.Provider value={{
  bulb:bulb,
  setBulb:setBulb
 }}> {/* u also define ki kya access / bhejna hai to the childrens  */}
  {/* now all the children to this component will get the access. to the context */}
    <ContextApi></ContextApi>
 </BulbContext.Provider>
  
  </div>
}

function LightBulb() {
 const [bulb, setBulb] = useState(false)
//  now pass it into prop , whatever they want.
 return <div>
    <BulbState bulb={bulb} />
    <ToggleBulbState setBulb={setBulb} />
  </div>

}

// the problem is setBulb variable is here and i have to update it in other Component.
// here we have to roll up the state and define the variable into the lowest common 
// anscestor
function BulbState({bulb}) {
  // const [bulb, setBulb] = useState(false)
  return <div>
    {bulb ? "bulb on" : "bulb off"}
  </div>
}

function ToggleBulbState({setBulb}) {
  return <div>
    <button onClick={function(){
      setBulb(b=>{return !b})  //just an arrow function that will return but if u add { } u have to return things manually
    }}>
      Toggle the bulb
    </button>
  </div>
}

export default App