import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {GoogleButton} from "react-google-button"

import "./signIn.css"
import FormInput from "../FormInput/index"


import {auth} from "../../Firebase"

import { signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup,  signInWithRedirect,} from "firebase/auth";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  signInWithPopup(auth, provider);
  // signInWithRedirect(auth, provider)
};


const SignIn=()=> {
  const [input,setInput]=useState({
    email:"",
    password:"",
  })
  
  const handleChange=(e)=>{
     const {name,value} =e.target
     
     setInput({
       [name]:value
     })
  }
    
    const handleSubmit=async(e)=> {
      e.prevent.default()
      const{email,password} = input
      
      try{
       await signInWithEmailAndPassword(auth,email,password);
       setInput({
        email:"",
        password:"",
       })
        
      }catch(err){
        console.log(err)
      }
      
      }

    
  return (
    <div className="signIn">
<div className="signIn-wrapper">
    
    <h3 className="signIn-header">Login</h3>
    <div className="form-wrapper">
    
    <form onSubmit={handleSubmit} >
        < FormInput
        handleChange={handleChange}
        name="email:"
        type="text"
        value={input.email}
        placeholder="Enter your email"/>
        
        < FormInput
        handleChange={handleChange}
        name="password:"
        type="password"
        value={input.password}
        placeholder="Enter your password "/>
        
        <div className="loginBtn-wrapper">
        <button className="btn loginBtn" type="submit">
            Log in
          </button>
          </div>
        
   
             <GoogleButton  className="socialSignin" onClick={ googleSignIn }/>
       

          <div className="links">
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
    
    
    </div>
    </div> 
    
      </div>
  )
}

export default SignIn