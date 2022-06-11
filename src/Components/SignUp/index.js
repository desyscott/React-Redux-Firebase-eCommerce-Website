import React,{useState,useEffect} from 'react'
import "./signUp.css"

import {Link,useHistory} from "react-router-dom"
import  FormInput from "../FormInput/index"
import AuthContainer from "../AuthContainer/index"


//redux
import {signUpUserStart} from "../Redux/Reducer/userReducer/userAction"
import {useSelector,useDispatch} from "react-redux"

const mapState=({User})=>({
  currentUser:User.currentUser,
  signUpError:User.signUpError,

})

const SignUp=()=>{
  const history=useHistory()
  const dispatch=useDispatch()
  const {currentUser,signUpError}=useSelector(mapState)
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

   
   useEffect(()=>{
     if(currentUser){
       resetForm();
       history.push("/")
     }
   },[currentUser])
   
   useEffect(()=>{
     if(Array.isArray(signUpError) && signUpError.length >0 ){
       setErrors(signUpError)
     }
   },[signUpError])
   
   
   
  const resetForm =()=>{
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
    }
 
  const handleSubmit=(e)=>{
   e.preventDefault()
   dispatch(signUpUserStart({name,email,password,confirmPassword}))  
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

export default SignUp;
