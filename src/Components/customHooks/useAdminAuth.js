import {useEffect} from "react"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {checkUserIAdmin} from "../../Utils/index"

const mapState=({User})=>({
    currentUser:User.currentUser
    
})


const useAdminAuth=(props)=>{
            const {currentUser} = useSelector(mapState)
            const history =useHistory()
            
            
    useEffect(()=>{
        if(!checkUserIAdmin(currentUser)){
            history.push("/login");
            
        }
    },[currentUser])
    return currentUser
}

export default useAdminAuth