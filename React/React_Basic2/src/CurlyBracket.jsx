import React from 'react'

function CurlyBracket() {
    //writing javascript inside jsx
    //u can call a fn inside {} but dont use if-else or loop
    //u can use ternary operator
    function fullName(name){
        return name + ' ' + 'kumar'
    }
    let name ='pawan'
  return (
    <div>
      <p className='para'>my name is {name} and my age is {23+9} <br />
      and full name is {fullName('sunil')}</p>
    </div>
  )
}

export default CurlyBracket
