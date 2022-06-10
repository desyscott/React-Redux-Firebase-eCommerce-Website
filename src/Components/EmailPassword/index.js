import React,{useState,useEffect} from 'react'
import "./EmailPassword.css"
import AuthContainer from "../AuthContainer/index"
import FormInput from "../FormInput/index"
import {withRouter} from "react-router-dom";



//redux
import {resetPassword,resetAllAuthForms} from "../Redux/Reducer/userReducer/userAction"
import {useSelector,useDispatch} from "react-redux"

const mapState=({User})=>({
    resetPasswordSuccess:User.resetPasswordSuccess,
    resetPasswordError:User.resetPasswordError
})

function EmailPassword(props) {
      const dispatch =useDispatch()
      const {resetPasswordSuccess, resetPasswordError} =useSelector(mapState)
      
    const [email,setEmail]=useState("")
    const [error,setError]=useState([])
    
    
    useEffect(()=>{
        if(resetPasswordSuccess){ 
             formReset()
             dispatch(resetAllAuthForms())
            props.history.push("/login")
       
        }
    },[resetPasswordSuccess])
    
    useEffect(()=>{
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0 ){
            setError(resetPasswordError)
        }
    },[ resetPasswordError])
    
    
    const formReset=()=>{
       setEmail("") 
    }
    
 
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(resetPassword({email}))
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
