import React,{Component} from "react"
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//layouts
import AdminPageLayout from "./Components/Layouts/AdminPageLayout/index"
import MainLayout from "./Components/Layouts/MainLayout/index"


//pages
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Products from "./Pages/Products/Products"
import Login from "./Pages/Login/Login"
import "./GlobalStyle.css"


import { Provider } from "react-redux";
import store from "./Components/Redux/Store/index"
import {auth} from "./Firebase"
import {onAuthStateChanged} from "firebase/auth"


const initialState={
  currentUser: null
}
class App  extends Component {
  
  constructor(props){
    super(props);
    this.state={
      ...initialState,
    }
  }
  
  authListener=null
  componentDidMount(){
    this.authListener= onAuthStateChanged(auth,(authUser)=>{
      if(!authUser)return;
      
      this.setState({
        currentUser: authUser
      })
   
    })
  }
  componentWillUnmount(){
    this.authListener()
  }
  
 render() {
  const {currentUser} = this.state

  return (
    <Provider store={store}>
    <Switch>
    
    <Route  path="/" exact  render={()=> (
         <MainLayout currentUser={currentUser}>
         <Home/>
      </MainLayout>
   
    )}/>
    
    <Route path="/dashboard" render={()=>(
      <AdminPageLayout  currentUser={currentUser}>
      <Dashboard/>
      </AdminPageLayout>
      
    )}/>
    <Route path="/products" render={()=>(
      <AdminPageLayout currentUser={currentUser}>
      <Products/>
      </AdminPageLayout>
      
    )}/>
    
    <Route path="/login" render={()=>currentUser?<Redirect to="/"/> :(
         <MainLayout currentUser={currentUser}>
      <Login/>
      </MainLayout>
   
    )}/>

    </Switch>
    
    </Provider>
  );
}
}

export default App;
