import React from 'react'
import HomeNav from "../../HomeNav/HomeNav"

const MainLayout=(props)=>{
  
  const {currentUser} =props
  return (
    <div className="main-layout">
    <HomeNav  currentUser={currentUser}/>
    <div>
   {props.children}
   </div>
    </div>
  )
}

export default  MainLayout
