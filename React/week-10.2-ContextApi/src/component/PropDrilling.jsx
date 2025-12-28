import { useState } from "react"

/*
           Prop Drilling visit the notes for it 
*/
const PropDrilling = () => {
    const [bulb, setBulb] = useState(false)
    return (
        <div>PropDrilling
            {/* even though it will not use it this will only pass it to its child variable needs to be passed via it , it is prop drilling 
        suppose u have multi-level deep component tree u have to pass props to multiple levels in here .
        */}
            <LightBulb bulb={bulb} setBulb={setBulb} />
        </div>
    )
}

function LightBulb({ bulb, setBulb }) {
    return <>

        <SetBulb setBulb={setBulb}></SetBulb>
        <Bulb bulb={bulb}></Bulb>
    </>

}

function SetBulb({ setBulb }) {
    return <>
        <button onClick={function () {
            setBulb(bulb => !bulb)
        }}>power Button</button>
    </>


}

function Bulb({ bulb }) {
    return <>
        {bulb ? "on" : "off"}
    </>
}
export default PropDrilling