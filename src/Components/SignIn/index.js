import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {GoogleButton} from "react-google-button"

import "./signIn.css"
import FormInput from "../FormInput/index"
import AuthContainer from "../AuthContainer/index"
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
    
    const configAuthContainer ={
      headline:"Login"
    }

    
  return (
        <AuthContainer  {...configAuthContainer}>
    <div className="form-wrapper">
    
    <form onSubmit={handleSubmit} >
        < FormInput
        name="email"
        required
        type="email"
        value={email}
        handleChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"/>
        
        < FormInput
        name="password"
        required
        type="password"
        value={password}
        handleChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"/>
        
        <div className="loginBtn-wrapper">
        <button className="btn loginBtn" type="submit">
            Log in
          </button>
          </div>
        
   
             <GoogleButton  className="socialSignin" onClick={ googleSignIn }/>
       

          <div className="links">
            <Link to="/forgetPassword">
              Forget Password
            </Link>
          </div>

        </form>
    
    
    </div>
</AuthContainer>
  )
}

export default withRouter(SignIn)