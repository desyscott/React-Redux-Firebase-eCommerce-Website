import React, {useState} from 'react'
import { FaArrowCircleRight,FaArrowCircleLeft } from 'react-icons/fa'
import "./imageSlider.css"


function ImageSlider({slideData}) {
  const [current,setCurrent]=useState(0)
  const length= slideData.length;
  
  
  const nextSlide=()=>{
    setCurrent(current === length -1 ? 0 : current +1);
  }
  const previousSlide=()=>{
    setCurrent(current === 0? length -1 : current -1);
  }
  
  // console.log(current)
  
  if(!Array.isArray(slideData) || slideData.length <= 0){
    return null;
  }
  
  return (
    <section className="slide-container"> 
    <FaArrowCircleLeft className="arrow-left"  onClick={previousSlide}/>
    <FaArrowCircleRight className="arrow-right" onClick={nextSlide}/>
    {slideData.map((slide,index)=>{
        return(
          <div className={index===current ? "slide-active ":"slide"} key={index}>
          {
            index === current && (
              <img src={slide.image} alt="grocery img" className="image"/>
            )
          }
      
         </div>
        )
    })}
      
    </section>
  )
}

export default ImageSlider
