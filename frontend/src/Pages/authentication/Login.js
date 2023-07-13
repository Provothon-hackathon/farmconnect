import React from 'react'
import "../../css/login.css"
import { useState, useEffect } from 'react'
import isEmail from 'validator/lib/isEmail'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const Login = () => {

   useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
         if(userInfo.role==="USER"){
            history.push('/')
         }else{
            history.push('/admin')
         }
      }
   }, [])

   const [username, setUserName] = useState("")
   const [password, setPassword] = useState("")
   const history = useHistory()

   const handleSubmit = async () => {

      if (!password || !isEmail(username)) {
         alert("Inavlid Value")
      }

      const config = {
         headers: {
            "Content-type": "application/json",
         }
      }

      try {

         const { data } = await axios.post('/authenticate', { username, password }, config)
         console.log(data)
         localStorage.setItem('userInfo', JSON.stringify(data))
         if(data.role==="USER"){
            history.push('/')
         }else{
            history.push('/admin')
         }

      } catch (error) {
         alert('error')
         console.log(error)
      }

   }

   return (
      <>
         <div class="sidenav">
            <div class="login-main-text">
               <h2>FarmConnect<br /> </h2>
               <p>Login or register from here to access.</p>
            </div>
         </div>
         <div class="main">
            <div class="col-md-6 col-sm-12">
               <div class="login-form">
                  <form>
                     <div class="form-group">
                        <label>Enter email</label>
                        <input type="text" class="form-control" value={username}
                           onChange={(e) => setUserName(e.target.value)}
                           placeholder="Email Address" />
                     </div>
                     <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Password" />
                     </div>
                     {/* <button type="submit" class="btn btn-secondary">Register</button> */}
                  </form>
                  <button type="submit" class="btn btn-black" onClick={handleSubmit}>
                     Login
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login