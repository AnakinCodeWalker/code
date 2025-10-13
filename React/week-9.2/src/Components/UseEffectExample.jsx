import React, { useState } from 'react'
import { useEffect } from 'react'

// something is wrong here.

/*
[] -->  here useEffect will run when the mount happens{first time the element is rendered}

[variable] --> useEffect will run when the variable is changed

without dependency array it will run each time
*/

const UseEffectExample = () => {
  const [count, setCount] = useState(1)

  const change = () => {
    setCount(count+ 1)
  }

  //needs a function and a dependency array 
  useEffect(function () {
    //needs a function and time in milliseconds
    setInterval(change, 1000)
  }, [])


  return (
    <div>UseEffectExample{count}</div>

  )
}

export default UseEffectExample