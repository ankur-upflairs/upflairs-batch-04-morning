import React from 'react'

function Styling() {
    let styleObj={
        backgroundColor:'red',display:'flex',width:'100%',height:'200px',
        justifyContent:'center'
    }
  return (
    <>
      <div style={styleObj}>
        <div style={{backgroundColor:'green',flexGrow:1}}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </>
  )
}

export default Styling
