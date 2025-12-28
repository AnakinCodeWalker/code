// as this let you deal with the dom u should wrap it with useEffect
import { useRef, useEffect } from "react"
const UseRef = () => {

  // it returns as mutuable object.
  const inputBox = useRef(null)
  const domChange = useRef(null)
  useEffect(() => {
    inputBox.current.focus()

    /*
    cleanup code 
    return ()=>{

    }
*/

  }, []) //dependency array.


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
<br />
      
      {/* useRef 2ND CASE   */}
      <div ref={domChange}>my name is </div>
      <br />
      <button onClick={changeContent}>domChange HTML</button>
    </div>


  )
}

export default UseRef