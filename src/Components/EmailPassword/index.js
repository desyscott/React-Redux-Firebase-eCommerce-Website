import React,{useState} from 'react'
import "./EmailPassword.css"
import AuthContainer from "../AuthContainer/index"
import FormInput from "../FormInput/index"
import {withRouter} from "react-router-dom";

import {auth} from "../../Firebase"
import {sendPasswordResetEmail} from "firebase/auth"

function EmailPassword(props) {
    const [email,setEmail]=useState("")
    const [error,setError]=useState([])
    
    
    const formReset=()=>{
       setEmail("") 
    }
    
    const config={
        url: "http://localhost:3000/login"
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await sendPasswordResetEmail(auth,email,config).then(()=>{
                props.history.push("/login")
                
            }).catch(()=>{
                const err=["Email is not found"];
                setError(err)
                   console.log(err)
            })
         
            formReset()
        }catch(err){
            console.log(err)
        }
    
    }
    
    const configAuthContainer={
        headline:"Reset your Password"
    }
    
  return (
    <>
      <AuthContainer {...configAuthContainer}>
      {error.length > 0 && (
          <ul>
          {error.map((err,index)=>{
           return(
               <li key={index}>
               {err}
               </li>
           )
          })}
          </ul>
      )}
      <form onSubmit={handleSubmit}>
      <FormInput  
      value={email}
      name="email"
      type="email"
      placeholder="Enter your password" 
      handleChange={(e)=>setEmail(e.target.value)}/>
      
      <button className="btn" type="submit">Reset Password</button>
      </form>
      </AuthContainer>
    </>
  )
}

export default withRouter(EmailPassword)
