import React,{useState} from 'react'
import "../../Components/Button/Button.css"
import "../Home/Home.css"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import { BsCart4} from "react-icons/bs";
import {sliderData} from "../../Components/ImageSlider/SliderData"
import {Link} from "react-router-dom"
import HeroImg from "../../Components/images/bg-1.png"
import {slideHeroData} from "../../Components/ImageSlider/SliderData"


function Home() {

  
  
  if(!Array.isArray(slideHeroData) || slideHeroData.length <= 0){
    return null;
  }
  return (
    <div className="home-container">

    <div className="Hero-container">
    <nav className="home-nav">
    
    <div className="nav-logo-container" >
    <Link   className="nav-logo" to="/"><span className="logo-icon"><BsCart4  size={30} /></span>Gro Mart </Link>
    </div>
     
    <ul className="Nav-Items">
    <li><Link className="nav-link">Home</Link></li>
    
    <li><Link  className="nav-link">Category </Link></li>
    
    <li><Link className="nav-link" >Project</Link></li>
    
    <li><Link className="nav-link">Deal</Link></li>
    
    <li><Link className="nav-link">Contact</Link></li>
    </ul>
    
    <div className="nav-button">
    <button>login</button>
    <button>get started</button>
    </div>
    </nav>
    
    <div className="Hero-content" style={{ backgroundImage: `url(${HeroImg})`,  backgroundRepeat: 'no-repeat',backgroundPosition:"center"}} >
   
    <div className="Hero-item" >
                <h1 className="heroH1">Oder Your Daily Groceries</h1>
                <p className="heroP">Free Delivery.</p>
                <button className="HeroBtn">Get Started</button>
      </div>
      
    <div className="hero-left-item">
    <div className="slide-frame">
    {slideHeroData.map((slide,index)=>{
      return(
        <div key={index}   className="active-slide" >
       
           <span className="slide-details">{slide.detail}</span> 
            <img src={slide.image} alt="img" className="left-img" style={{width:slide.WIDTH}}/>
        
        </div>
      )
    })}
      </div>
      </div>
    
    </div>
    
    
    </div>
    
    <ImageSlider slideData={sliderData}/>

    <h3>welcome to Gro mart </h3>
    <Link to ="/dashboard" className="btn secondary-btn">Dashboard</Link>

    
    </div>
  )
}

export default Home