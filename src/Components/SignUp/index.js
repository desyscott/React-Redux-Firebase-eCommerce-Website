import React,{useState,useEffect} from 'react'
import "./signUp.css"

import {Link,withRouter} from "react-router-dom"
import  FormInput from "../FormInput/index"
import AuthContainer from "../AuthContainer/index"


//redux
import {signUpUser,resetAllAuthForms } from "../Redux/Reducer/userReducer/userAction"
import {useSelector,useDispatch} from "react-redux"

const mapState=({User})=>({
  signUpError:User.signUpError,
  signUpSuccess:User.signUpSuccess,
})

const SignUp=(props)=>{
  const dispatch=useDispatch()
  const {signUpSuccess,signUpError}=useSelector(mapState)
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

   
   useEffect(()=>{
     if(signUpSuccess){
       resetForm();
     dispatch( resetAllAuthForms())
       props.history.push("/")
     }
   },[signUpSuccess])
   
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
   
   dispatch(signUpUser({name,email,password,confirmPassword}))
   
  //  if(password !==confirmPassword){
  //    const err = ["password don't match"]
  //    setErrors(err);
  //    console.log(errors)
  //    return;
   
  //  }
   
  
  //  try{
  //    const {user}=await createUserWithEmailAndPassword(auth,email,password)
  //    await handleUserProfile(user,{name})

  //  resetForm();
     
  //  }catch(error){
  //    console.log(errors)
     
  //  }   
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
