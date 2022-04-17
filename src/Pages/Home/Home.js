import React from 'react'
import AdminPage from "../Admin/AdminPage"
import "../../Components/Button/Button.css"
import "../Home/Home.css"
import {Link} from "react-router-dom"


function Home() {
  return (
    <>
    <nav className="navBar">
    
    <ul className="Nav-Items">
    <li><Link>About </Link></li>
    <li><Link>About </Link></li>
    <li><Link>About </Link></li>
    <li><Link>About </Link></li>
    <li><Link>About </Link></li>
    </ul>
    </nav>
    
    <div className="Container">
    
    
    <h3>welcome to Gro mart </h3>
    <Link to ="/dashboard" className="btn secondary-btn">Dashboard</Link>
    </div>
    </>
  )
}

export default Home