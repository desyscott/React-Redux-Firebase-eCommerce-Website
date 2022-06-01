import React,{useState,useEffect,useRef} from "react"
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./GlobalStyle.css"

//layouts
import AdminPageLayout from "./Components/Layouts/AdminPageLayout/index"
import MainLayout from "./Components/Layouts/MainLayout/index"


//pages
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Products from "./Pages/Products/Products"
import Login from "./Pages/Login/Login"

import {connect} from "react-redux"
import {setCurrentUser} from "./Components/Redux/Reducer/userReducer/userAction"
import {auth} from "./Firebase"
import {onAuthStateChanged} from "firebase/auth"



function  App  (props){
   const {setCurrentUser,currentUser}=props
   
   const Categories =useRef(null)
   const products =useRef(null)
   const Features =useRef(null)
   const Reviews =useRef(null)
   
   //Listening for auth State change of User
   useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(authUser)=>{
          if(!authUser) {
            setCurrentUser(null)
          }
          
            setCurrentUser(authUser)
          
        })
return unsubscribe
   },[])

  return (
    <>
    <Switch>
    <Route  path="/" exact  render={()=> (
         <MainLayout  Categories ={Categories} products={products} Reviews ={Reviews }  Features={ Features}>
         <Home  Categories={Categories}  products ={ products} Features={Features} Reviews={Reviews}/>
      </MainLayout>
   
    )}/>
    

    
    <Route path="/dashboard" render={()=>(
      <AdminPageLayout >
      <Dashboard/>
      </AdminPageLayout>
      
    )}/>
    <Route path="/products" render={()=>(
      <AdminPageLayout >
      <Products/>
      </AdminPageLayout>
      
    )}/>
    
    <Route path="/login" render={()=> currentUser? <Redirect to="/"/> :(
         <MainLayout>
      <Login/>
      </MainLayout>
   
    )}/>

    </Switch>
    
    </>
  );
}


const mapStateToProps = ({User})=>({
  currentUser:User.currentUser
})
 
 //Dispatch an action  to be use in our payload to update our state
const mapDispatchToProps = (dispatch)=>({
  setCurrentUser:(user) =>dispatch(setCurrentUser(user))
})
 
export default connect(mapStateToProps, mapDispatchToProps) (App);
