import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {GoogleButton} from "react-google-button"

import "./signIn.css"
import FormInput from "../FormInput/index"
import {withRouter} from "react-router-dom"


import {auth} from "../../Firebase"
import { signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup,  signInWithRedirect,} from "firebase/auth";


const SignIn=(props)=> {
  
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  

  
  const resetForm =()=>{
    setEmail('');
    setPassword('');
  }
    
    const handleSubmit=async(e)=> {
      e.preventDefault()
   
      try{
       await signInWithEmailAndPassword(auth,email,password);
       resetForm();
       props.history.push("/");
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
        name="email:"
        type="text"
        value={email}
        handleChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"/>
        
        < FormInput
        name="password:"
        type="password"
        value={password}
        handleChange={e => setPassword(e.target.value)}
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

export default withRouter(SignIn)