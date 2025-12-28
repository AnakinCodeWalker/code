import { useState } from "react"
// creating a clock that will start and stop after each 5 seconds

// if you use normal variables in here at each re render the varaible will be re-intiallized to its original value.
function Counter() {
  /* 
  created useState variable because their values will be protected after every re render
  */
  const [count, setCount] = useState(0)
  // as this variable will change the component will re render.
  const [timer, setTimer] = useState(0)

  function startClock() {
    // this return a variable that can be used to clear the interval 
    let value = setInterval(timeOut, 1000)
    setTimer(value) //using this varaible to clear the interval.
  }

  function stopClock() {
    clearInterval(timer)
  }

  function timeOut() {
    setCount(count=>count + 1)
  }

  return (
    <>

      {count}
      <button onClick={startClock}style={{
        margin:10
      }}>start</button>
      <button onClick={stopClock}>stop</button>
    </>
  )

}

export default Counter