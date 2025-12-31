
import { useContext} from "react"
import BulbContext from "./BulbContext.js"
/*
1. createContext()
2.provider
3.consumer
*/


// created the contex
// wrapped the component around the context and then .Provided value={{
//  values u want to pass in the object
// }}
// and the children can use the context/ object via useContext().
const ContextApi = () => {
 
  
    return (
        <div>ContextApi
            <LightBulb/>
            <LightSwitch/>
        </div>
    )
}

function LightBulb(){
    const {bulb} = useContext(BulbContext)
    return <div>
{bulb}

    </div>
}

function LightSwitch(){
  const {bulb ,setBulb} = useContext(BulbContext)
    return <div>
        {bulb}

        <button onClick={function(){
            setBulb(b=>!b)
        }}></button>
    </div>
}

export default ContextApi

