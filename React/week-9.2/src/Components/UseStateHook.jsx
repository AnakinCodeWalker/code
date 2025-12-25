/*
when the value of a state variable changes , the component that uses the state variable
rerenders  

if a state varaible is defined in the parent all its children will re render with the  Parent.
*/

//  Understanding the UseState hook
import { useState } from "react";


function UseStateHook() {

    // state variable
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(false)
    function increase() {
        setValue(value + 1);
    }
    function decrease() {
        setValue(value - 1);
    }

    function isToggle() {
        setVisible(visible => !visible)
    }

    return <div>
        <div>
            <button onClick={isToggle}> Drive  </button>
            hi  my name is {visible && <span > parikshit </span>} {/* conditional rendering */}
        </div>
        my current  Age is {value}

        <button onClick={increase} style={{
            margin: 10,
            padding: 5,
            borderRadius: 5,
            border: "none"
        }}>Increase</button>

        <button onClick={decrease} style={{
            padding: 5,
            borderRadius: 5,
            border: "none"

        }}>Decrease</button>
    </div>

}
export default UseStateHook
