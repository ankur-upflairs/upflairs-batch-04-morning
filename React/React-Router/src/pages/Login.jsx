import React, { useState } from 'react'

function Login() {
    const [show,setShow]=useState(false)
    const [user, setUser] = useState({
        userName: '', password: ''
    })
    function userInfo(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    return (
        <div style={{display:'flex'}}>
            <div>
                <form onSubmit={(e) => {e.preventDefault();setShow(true)}} >
                    <label htmlFor="">
                        <input type="text" name='userName' onChange={userInfo} value={user.userName} />
                    </label><br />
                    <label htmlFor="">
                        <input type="password" name='password' onChange={userInfo} value={user.password} />
                    </label><br />
                    <input type="submit" />
                </form>
            </div>
            <div>
            <p>userName - {show && user.userName}</p>
            <p>password - {show && user.password}</p>
            </div>
        </div>
    )
}

export default Login
