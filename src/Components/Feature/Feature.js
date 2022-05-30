import React, {useState,useEffect} from 'react'
import { FaArrowCircleRight,FaArrowCircleLeft } from 'react-icons/fa'
import "./Feature.css"
import "../../Components/Button/Button.css"



function ImageSlider({featureData}) {
  const [currentSlide,setCurrentSlide]=useState(0)
  const length= featureData.length;
  
  
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === length -1 ? 0 : currentSlide +1);
  }
  const previousSlide=()=>{
    setCurrentSlide(currentSlide === 0? length -1 : currentSlide -1);
  }
  
 const autoScroll=true;
  let slideInterval;
  let intervalTime=4000;
  
  
  function auto(){
          slideInterval =setInterval(nextSlide,intervalTime)
  }  
  
 useEffect(()=>{
   setCurrentSlide(0)
 },[])
 
 useEffect(()=>{
   if(autoScroll){
     auto()
   }
   return()=>clearInterval(slideInterval)
 },[currentSlide])
  // console.log(current)
  
  if(!Array.isArray(featureData) || featureData.length <= 0){
    return null;
  }
  
  return (
    <section className="slide-container"> 
    {featureData.map((slide,index)=>{
        return(
          <div className={index===currentSlide ? "slide current ":"slide"} key={index}>
          {
            index === currentSlide && (
              <>
              <img src={slide.image} alt="grocery img" className="image"/>
              <div className="feature-content">
              <h1>20% off at Gro Mart</h1>
               <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
              <button className="btn feature-btn">order Now</button>
              </div>
              </>
            )
          }
      
         </div>
        )
    })}
      
    </section>
  )
}

export default ImageSlider
