import React,{useState,useEffect} from 'react'
import {Link, withRouter} from "react-router-dom"
import {GoogleButton} from "react-google-button"

import "./signIn.css"
import FormInput from "../FormInput/index"
import AuthContainer from "../AuthContainer/index"


//redux,
import  {signInUser,signInWIthGoogle,resetAllAuthForms } from "../Redux/Reducer/userReducer/userAction"
import {useSelector,useDispatch} from "react-redux"


const mapState=({User})=>({
  signInSuccess:User.signInSuccess
})

const SignIn=(props)=> {
  const {signInSuccess}=useSelector(mapState)
   const dispatch =useDispatch()

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  useEffect(()=>{
    if(signInSuccess){
       resetForm();
     dispatch( resetAllAuthForms())
      props.history.push("/");
    }
  },[signInSuccess])
  
  const resetForm =()=>{
    setEmail('');
    setPassword('');
  }
  

    
    const handleSubmit=(e)=> {
      e.preventDefault()
      dispatch(signInUser ({email,password}))
      }
    
 const handleGoogleSignIn = () => {
   dispatch(signInWIthGoogle())
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

export default withRouter(SignIn)