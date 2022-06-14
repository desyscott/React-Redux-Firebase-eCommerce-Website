import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {checkUserIsAdmin} from "../../Utils/index"


const mapState=({User})=>({
    currentUser: User.currentUser
})

function AdminToolbar() {
    const {currentUser}=useSelector(mapState)
    
    const AdminRight=checkUserIsAdmin(currentUser)
    if(!AdminRight) return null
  return (
    <div>
    <ul><li>  <Link to="/dashboard">Admin</Link></li></ul>
  
    </div>
  )
}

export default AdminToolbar