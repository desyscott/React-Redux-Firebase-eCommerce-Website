import React,{useState,useEffect} from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa';
import "./ScrollToTop.css"

function ScrollToTop() {
    const [showScrollTopButton,setShowScrollTopButton]=useState(false);
    
    
    const ScrollToTopSection=()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
        
      }
    
const ScrollToTop=()=>{
    if(window.scrollY > 300){
        setShowScrollTopButton(true)
    }else{
        setShowScrollTopButton(false)
    }
}
    
    useEffect(()=>{
        window.addEventListener("scroll",ScrollToTop)
    },[])
    
    
  return (
    <>
    {showScrollTopButton &&(
        <>
        <FaAngleDoubleUp className="scroll-top-btn-wrapper scroll-top-btn" onClick={()=>ScrollToTopSection()}/>
        </>
    )}

    </>
  )
}

export default ScrollToTop