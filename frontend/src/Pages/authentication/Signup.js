import React, { useState } from 'react'
import { useEffect } from 'react'
import {isEmail} from 'validator'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Signup = () => {


   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [role, setRole] = useState("USER")
   const history = useHistory()

   // {
   //    "email": "aditya@gmail.com",
   //    "name": "Aditya",
   //    "password": "aditya14",
   //    "role":"ADMIN"
   //  }

   useEffect(() => {

   }, [])


   const onOptionChange = (e) => {
      setRole(e.target.value)
   }
   
   
   const handleSubmit = async ()=>{

      if(!name || !isEmail(email) || !password){
         alert("Inavalid Data")
         return
      }

      const config = {
         headers: {
             "Content-type": "application/json",
         }
     }
      try {
         const  {data}  = await axios.post('/register',{name,email,password,role},config)
         console.log(data)
         history.push('/login')
      } catch (error) {
         console.log(error)
         alert('error')
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
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} 
                        class="form-control" placeholder="Email Address" />
                     </div>
                     <div class="form-group">
                        <label>Enter name</label>
                        <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}  
                        placeholder="User Name" />
                     </div>
                     <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} 
                        placeholder="Password" />
                     </div>
                     <div class="form-group">
                        <label>Are you a farmer or a consumer</label>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="ADMIN" onChange={onOptionChange} checked={role==="ADMIN"} />
                           <label class="form-check-label" for="exampleRadios1">
                              Farmer
                           </label>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="USER" onChange={onOptionChange} checked={role==="USER"} />
                           <label class="form-check-label" for="exampleRadios2">
                              Consumer
                           </label>
                        </div>
                     </div>
                     {/* <button type="submit" class="btn btn-black">Login</button> */}
                  </form>
                     <button type="submit" class="btn btn-secondary" onClick={handleSubmit}>Register</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Signup