import React from 'react'
import HomeNav from "../../HomeNav/HomeNav"

const MainLayout=(props)=>{

  return (
    <div className="main-layout">
    <HomeNav  {...props}/>
    <div>
   {props.children}
   </div>
    </div>
  )
}

export default  MainLayout
