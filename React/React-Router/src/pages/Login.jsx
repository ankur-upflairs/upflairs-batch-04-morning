import React, { useState } from 'react'

function Login() {
    const [user,setUser]=useState({
        userName:'',password:''
    })
    function userInfo(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()} >
        <label htmlFor="">
            <input type="text" name='userName' onChange={userInfo} value={user.userName} />
        </label><br />
        <label htmlFor="">
            <input type="password" name='password' onChange={userInfo} value={user.password} />
        </label><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
