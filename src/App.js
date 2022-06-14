import {useEffect,useRef} from "react"
import {
  Switch,
  Route,
} from "react-router-dom";
import "./GlobalStyle.css"

//layouts
import AdminPageLayout from "./Components/Layouts/AdminPageLayout/index"
import MainLayout from "./Components/Layouts/MainLayout/index"

//pages
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import ManageProducts from "./Pages/ManageProducts/ManageProducts"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword"
import Search from "./Pages/Search/Search"

//redux
import {useDispatch} from "react-redux"
import {checkUserSession} from "./Components/Redux/Reducer/userReducer/userAction"


import WithAuth from "./Components/context/WIthAuth"
import WithAdminAuth from "./Components/context/WithAdminAuth"


const App =()=>{
  const dispatch = useDispatch()
   
   const Categories =useRef(null)
   const products =useRef(null)
   const Features =useRef(null)
   const Reviews =useRef(null)
   
   useEffect(()=>{
    dispatch(checkUserSession())
   },[])


  return (
    <>
    <Switch>
    <Route  path="/" exact  render={()=> (
         <MainLayout  Categories ={Categories} products={products} Reviews ={Reviews }  Features={ Features}>
         <Home  Categories={Categories}  products ={ products} Features={Features} Reviews={Reviews}/>
      </MainLayout>
   
    )}/>
    
    <Route exact path="/search" render={()=>(
       <MainLayout>
      <Search/>
      </MainLayout> 
   ) }/>
    
     {/*The  url params */}
    <Route path="/search/:filterType" render={()=>(
           <MainLayout>
      <Search/>
      </MainLayout>
    )}/>
    
    
    <Route path="/dashboard" render={()=>(
     <WithAdminAuth>
      <AdminPageLayout >
      <Dashboard/>
      </AdminPageLayout>
   </WithAdminAuth>
      
    )}/>
    

    <Route path="/manageProducts" render={()=>(
             <WithAdminAuth>
      <AdminPageLayout >
      <ManageProducts/>
      </AdminPageLayout>
      </WithAdminAuth>
    )}/>
    
  
    
    <Route path="/register" render={()=> (
         <MainLayout>
      <Register/>
      </MainLayout>
   
    )}/>
    
    <Route path="/login" render={()=>(
         <MainLayout>
      <Login/>
      </MainLayout>
   
    )}/>
    
    <Route path="/forgetPassword" render={()=>(
     <MainLayout>
     <ForgetPassword/>
     </MainLayout>
    )}/>

    </Switch>
    </>
  );
}
export default App;
