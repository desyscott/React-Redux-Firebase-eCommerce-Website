import {useEffect,useRef} from "react"
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
import Register from "./Pages/Register/Register"

//redux
import {connect} from "react-redux"
import {setCurrentUser} from "./Components/Redux/Reducer/userReducer/userAction"


import AuthContext from "./Components/context/AuthContext"

//Firebase
import {auth,handleUserProfile} from "./Firebase"
import {onSnapshot} from "firebase/firestore"
import {onAuthStateChanged} from "firebase/auth"




const App =(props)=>{
   const {setCurrentUser,currentUser}=props
   
   const Categories =useRef(null)
   const products =useRef(null)
   const Features =useRef(null)
   const Reviews =useRef(null)
   
   //Listening for auth State change of User
   useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,async(authUser)=>{
          if(authUser) {
            const userRef = await handleUserProfile(authUser);
            onSnapshot(userRef,(snapshot)=>{
              setCurrentUser({
                id:snapshot.id,
                ...snapshot.data()
              })
            })
         
          }
        else{
            setCurrentUser(null)
          } 
        
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
      <AuthContext>
      <AdminPageLayout >
      <Dashboard/>
      </AdminPageLayout>
      </AuthContext>
      
    )}/>
    <Route path="/products" render={()=>(
            <AuthContext>
      <AdminPageLayout >
      <Products/>
      </AdminPageLayout>
      </AuthContext>
      
    )}/>
    
    <Route path="/register" render={()=> currentUser? <Redirect to="/"/> :(
         <MainLayout>
      <Register/>
      </MainLayout>
   
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
