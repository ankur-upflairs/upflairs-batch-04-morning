import React, { useState } from 'react'
import './condition.css'
function ConditionalRendering() {
    const [dark,setDark]=useState(false)
    const [show,setShow]=useState(true)

    function showOrHide(){
        setShow(!show)
    }
    function changeTheme(){
        setDark(!dark)
        console.log(dark)        
    }
    if(dark) document.body.style.backgroundColor='grey'
    else document.body.style.backgroundColor='white'

  return (
    <div>
      <button onClick={changeTheme}>{dark?'dark':'white'}</button>
      <button onClick={showOrHide}>{show? 'hide':'show'}</button>
      <div className={show ? 'box show': 'hide'}></div>

      {/* <div style={{
        width:'150px',height:'150px',border:'1px solid',
        display:show ?'block':'none'
      }}></div> */}
    </div>
  )
}

export default ConditionalRendering
