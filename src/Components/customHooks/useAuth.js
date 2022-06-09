import {useEffect} from 'react'
import {useSelector} from "react-redux";

const mapState=({User})=>({
    currentUser:User.currentUser
})

//checking if user is login 
const useAuth=(props)=>{
  const {currentUser}=useSelector(mapState)
    
    useEffect(()=>{
        if(!currentUser){
            props.history.push("/login")
        }
        
    },[currentUser])
    
    return currentUser
}

export default useAuth;