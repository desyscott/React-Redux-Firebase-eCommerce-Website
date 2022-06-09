import React,{useState} from 'react'
import "./signUp.css"

import {Link,withRouter} from "react-router-dom"
import  FormInput from "../FormInput/index"
import AuthContainer from "../AuthContainer/index"

import {auth,handleUserProfile} from "../../Firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"


const SignUp=(props)=>{
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

   
  const resetForm =()=>{
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
    }
 
  const handleSubmit=async(e)=>{
   e.preventDefault()
   
   if(password !==confirmPassword){
     const err = ["password don't match"]
     setErrors(err);
     console.log(errors)
     return;
   
   }
   
  
   try{
     const {user}=await createUserWithEmailAndPassword(auth,email,password)
     await handleUserProfile(user,{name})

   resetForm();
     
   }catch(error){
     console.log(errors)
     
   }   
  }

const configAuthContainer={
  headline:"Sign Up"
}
  
  return (
    <>
     <AuthContainer {...configAuthContainer}>
   {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}
   <form onSubmit={handleSubmit}>
        < FormInput
        name="name"
        required
        type="text"
        value={name}
        handleChange={e => setName(e.target.value)}
        placeholder="Enter your name"/>
        
        < FormInput
        name="email"
        required
        type="email"
        value={email}
        handleChange={e => setEmail(e.target.value)}
        placeholder="Enter your email "/>
        
        < FormInput
        name="password"
        type="password"
        required
        value={password}
        handleChange={e => setPassword(e.target.value)}
        placeholder="Enter your password "/>
        
        < FormInput
        name="password"
        type="password"
        value={confirmPassword}
        handleChange={e => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password "/>
    
        
        <div className="signUpBtn-wrapper">
        <button className="btn signUpBtn" type="submit">
           Sign Up
          </button>
          </div>
       

          <div className="links">
            <Link to="/login">
              Login
            </Link>
          </div>

        </form>
        </AuthContainer>
   
    </>
  )
}

export default withRouter(SignUp);
