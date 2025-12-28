// as this let you deal with the dom u should wrap it with useEffect
//reference to value , such that when u change the vakue componenet does not re render.
import { useRef, useEffect } from "react"
const UseRef = () => {

  // it returns as mutuable object.
  const inputBox = useRef(null)
  const domChange = useRef(null)
  useEffect(() => {
    

    /*
    cleanup code 
    return ()=>{

    }
*/

  }, []) //dependency array.


  //just doing the focus thing via setTimeout().
function focusBox(){
  inputBox.current.focus()
}
function call(){
  setTimeout(focusBox,3000)
}


  function changeContent() {
    domChange.current.innerHTML = "hi"
  }
  return (

    <div >
      <br />
      UseRef
      <br />
               {/* 1ST CASE  */}
      {/* you refer to the html element via this and made changes into it  */}
    Name  <input ref={inputBox} type="text" />
    
    {/* as u hit the button cursor/focus will goto the elemnt */}
    <button onClick={call}>submit</button> 

<br />
      
      {/* useRef 2ND CASE   */}
      <div ref={domChange}>my name is </div>
      <br />
      <button onClick={changeContent}>domChange HTML</button>
    </div>


  )
}

export default UseRef