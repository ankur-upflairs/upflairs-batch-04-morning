import React, { useState } from 'react'

function Events() {
    let [state,setState]=useState(0)
    //usestate is always inside a component
    //usestate returns 2 values => 1. state variable
    // 2.a function to change state 
    //we can't change state directly
    //use setState function 
    //whenever the value of state is changed ui re-renders
    
    function increaseState(){
        // state=7
        setState(state+1)
    }


    let count=0
    function handleClick(e){
        console.log(e)
        alert('button clicked')
    }
    function showMsg(msg){
        alert(msg)
    }
    function increase(){
        count++
        // console.log(count)
    }
  return (
    <div>
      <button onClick={handleClick}>click here</button>
      <button onClick={()=>showMsg('hello !!!')}>click with a msg</button>
      <br />
      <p>{count}</p>
      <p>state is {state}</p>
      <button onClick={increase}>increase</button>
      <button onClick={increaseState}>increaseState</button>
    </div>
  )
}

export default Events
