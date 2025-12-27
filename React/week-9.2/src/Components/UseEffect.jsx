// Mounting  - means adding the component to the dom [component is rendered frist time]
// unMounting  - means removing the component from the dom  

// coding for the UseEffect


/*  useEffect lets you handle SideEffects.  
side effects ka matlab are operations that interact with the outside world or have effect beyond the component rendering.

// sideEffect has nothing to do with the component rendering  , something you want to do something on the side they affect the thing outside component rendering.

Api calls 
Dom manipulation
setInterval / setTimeout
Event Listener
Subscription / cleanup 


/* if u add sideEffect direclty in your code componet react will run the code everytime the component re-rerender
 
This leads to 
in setTimeOut yeh bar bar call hoga  ,bar bar component  rerender hoga.

-> Unnecessary or duplicated effect (multiple Api calls)
-> Inconsistent behaviour (side effect might happend before rerendering finishes)
-> performance issue(side effect could block rendering or cause excessive re rendering)

*/


/*
** Subscription means starting a process that listens or runs continuously  , and cleanup means stopping it to avoid memory leaks when the component unmounts or re renders.
common subscriptions -> setInterval / setTimeout , window.addEventListener , webSocket , firebase listener , API polling  
*/




import { useState } from "react"
import { useEffect } from "react"

//  use all 3 show without and with UseEffect cosequences..

function UseEffect(){


    const [count , SetCount] = useState(0)
function setValue(){
    SetCount(count+1)  //weird behaviour of the code 
}
 setInterval(setValue,1000) 


//  the useEffect hook 
 useEffect(() => {
      
    console.log(`will run only once as the dependency [] is empty`);


    // whatever code will be written inside will run when the  component being mounted [when the component comes for the 1st time]

    //    wrap the sideeffect inside the useEffect  so it will run only one time
    
    return () => { //cleanup Code for useEffect.
           
          }
        }, [])  //dependency array{if u want to use a state varaible inside a Useeffect put them into the dependency array}



useEffect(()=>{

return ()=>{
console.log(`will re run each time the value of varaible changes ${count}`);
}

}, [count] ) // logic inside the effect will run each time , as the useState variable changes.


 return <div style={{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        width:400
        }}>

    <div style={{
       backgroundColor:"grey",
        height:"300px",
        width:"300px",
        margin:10,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        
        <div style={{
            backgroundColor:"red",
            width:50,
            height:50,
            borderRadius:50,
            textAlign:"center",
            margin:10
        }}>  {count}
        without UseEffect Hook
        </div>
        
        
        
        <div style={{
            backgroundColor:"pink",
            width:50,
            height:50,
            borderRadius:50,
            textAlign:"center"
        }}>
            with UseEffect Hook 
      
     
        {count}</div>
    </div>
    
    
    
    <div style={{
            backgroundColor:"pink",
            width:50,
            height:50,
            borderRadius:50,
            textAlign:"center"
        }}> hi2
    </div>
    
    
    </div>
}
export default UseEffect



/*
cleanup logic even when the code is being un mounted[not present in the dom]
 the side effects keeps running  
 Agar cleanup na ho, to sideEffects component remove hone ke baad bhi chalta rehta hai.
 
*/