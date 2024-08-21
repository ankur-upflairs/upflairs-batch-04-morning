import React, { useState } from 'react'
import { auth } from '../user'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Login() {
    let navigate=useNavigate()
    const [show,setShow]=useState(false)
    const [user, setUser] = useState({
        email: '', password: ''
    })
    function userInfo(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    let handleSubmit=async (e)=>{
         e.preventDefault();
    //    let formdata=new FormData()
    //    formdata.append('email',user.email)
    //    formdata.append('password',user.password)
       let res=await axios.post('http://localhost:3000/user/login',user)
        if(res.data.status=='success'){
            localStorage.setItem('token',res.data.token)
            navigate('/dashboard')
            // console.log(res.data)
        }
        else console.log(res.data)
    }
    return (
        <div style={{display:'flex'}}>
            <div>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="">
                        email : 
                        <input type="text" name='email' onChange={userInfo} value={user.email} />
                    </label><br />
                    <label htmlFor="">
                        password : 
                        <input type="password" name='password' onChange={userInfo} value={user.password} />
                    </label><br />
                    <input type="submit" />
                </form>
            </div>
            <div>
            </div>
        </div>
    )
}




// function Login() {
//     let navigate=useNavigate()
//     const [show,setShow]=useState(false)
//     const [user, setUser] = useState({
//         userName: '', password: ''
//     })
//     function userInfo(e) {
//         setUser({ ...user, [e.target.name]: e.target.value })
//         console.log(user)
//     }
//     let handleSubmit=(e)=>{
//          e.preventDefault();
//          setShow(true)
//             if(auth.userName==user.userName && auth.password==user.password){
//                 navigate('/dashboard')
//             }
//             else{
//                 alert(`sorry wrong credentials`)
//             }
//             setUser({
//                 userName: '', password: ''
//             })

//     }
//     return (
//         <div style={{display:'flex'}}>
//             <div>
//                 <form onSubmit={handleSubmit} >
//                     <label htmlFor="">
//                         <input type="text" name='userName' onChange={userInfo} value={user.userName} />
//                     </label><br />
//                     <label htmlFor="">
//                         <input type="password" name='password' onChange={userInfo} value={user.password} />
//                     </label><br />
//                     <input type="submit" />
//                 </form>
//             </div>
//             <div>
//             <p>userName - {show && user.userName}</p>
//             <p>password - {show && user.password}</p>
//             </div>
//         </div>
//     )
// }

export default Login
