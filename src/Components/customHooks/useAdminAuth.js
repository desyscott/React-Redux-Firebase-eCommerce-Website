import {useEffect} from "react"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {checkUserIsAdmin} from "../../Utils/index"

const mapState=({User})=>({
    currentUser:User.currentUser   
})

const useAdminAuth=(props)=>{
            const {currentUser} = useSelector(mapState)
            const history=useHistory()
            
  ///takes the current user and checks if the user is an admin          
    useEffect(()=>{
        if(!checkUserIsAdmin(currentUser)){
            history.push("/login"); 
        }
    },[currentUser])
    return currentUser
}
export default useAdminAuth;