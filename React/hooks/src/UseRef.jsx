import React, { useRef, useState } from 'react'

function UseRef() {
    let count1=0
    let count=useRef(0)
    let [state,setState]=useState(0)
    let box=useRef(null)
    let change=()=>{
        box.current.style.backgroundColor='green'
    }
  return (
    <div>
      <p>variable- {count1}</p>
      <p>useref - {count.current}</p>
      <p>state - {state}</p>
      <button onClick={()=>count1++}>variable</button>
      <button onClick={()=>count.current++}>useref</button>
      <button onClick={()=>setState(state+1)}>state</button>
      <div ref={box} onClick={change} >change color</div>
    </div>
  )
}

export default UseRef
