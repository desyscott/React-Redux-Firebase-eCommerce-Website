import React,{useState,useEffect} from 'react'
import {Link, useHistory} from "react-router-dom"
import {GoogleButton} from "react-google-button"

import "./signIn.css"
import FormInput from "../FormInput/index"
import AuthContainer from "../AuthContainer/index"


//redux,
import  {emailSignInStart,signInWIthGoogleStart} from "../Redux/Reducer/userReducer/userAction"
import {useSelector,useDispatch} from "react-redux"


const mapState=({User})=>({
  currentUser:User.currentUser
})

const SignIn=(props)=> {
  const history =useHistory()
  const { currentUser}=useSelector(mapState)
   const dispatch =useDispatch()

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  useEffect(()=>{
    if( currentUser){
       resetForm();
     history.push("/");
    }
  },[currentUser])
  
  const resetForm =()=>{
    setEmail('');
    setPassword('');
  }
  

    
    const handleSubmit=(e)=> {
      e.preventDefault()
      dispatch(emailSignInStart ({email,password}))
      }
    
 const handleGoogleSignIn = () => {
   dispatch(signInWIthGoogleStart())
      };
    
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
        
   
             <GoogleButton  className="socialSignin" onClick={ handleGoogleSignIn }/>
       

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

export default SignIn