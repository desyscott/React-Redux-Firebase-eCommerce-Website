import React from 'react'
import Cards from "../../Components/Cards/Cards"
import "./Dashboard.css"
import  UserTable from "../../Components/UserTable/UserTable"

function Dashboard() {
  return (
    <div className="main-container">

      <h1 className="dashboard-header">dashboard</h1>
      
   
      
      <div className="dashboard-container">
      <div className="dashboard-cards">
      <Cards/>
      </div>
      
      
      <div  className="dashboard-userTable">
      <UserTable/>
      </div>
      </div>

    </div>
  )
}

export default Dashboard
