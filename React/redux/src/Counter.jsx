import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    let count=useSelector((state)=>state.counter)
    let dispatch=useDispatch()
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch({type:'counter/add'})}>increase</button>
      <button onClick={()=>dispatch({type:'counter/sub'})}>decrease</button>
    </div>
  )
}

export default Counter
