import {useEffect} from 'react'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const mapState=({User})=>({
    currentUser:User.currentUser
})

//checking if user is login 
const useAuth=(props)=>{

  const {currentUser}=useSelector(mapState)
  const history =useHistory()
    
    useEffect(()=>{
        if(!currentUser){
         history.push("/login")
        }
        
    },[currentUser])
    
    return currentUser
}

export default useAuth;