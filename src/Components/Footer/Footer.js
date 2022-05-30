import React,{useState} from "react"
import { IconContext } from "react-icons";
import { 
    FaTwitter, 
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPinterest,
    FaArrowRight, 
   } from "react-icons/fa";
    import "./Footer.css"
    // import {ShopifyIcon} from "../iconsElement.js"
    import {Link} from "react-router-dom"




const Footer=()=>{
    const [inputText,setInputText]=useState("")
    return(
        <>
        <IconContext.Provider value={{color:"#d6a458"}}>
        <div className="footer-container">
        <div className="footer-row">
        <div className="footer-col">
        <p className="footer-logo">Gro Mart</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reprehenderit illum dignissimos odio qui,
         exercitationem sit? Maiores repellat ut tempora sint natus praesentium minus aut mollitia nulla ducimus. Nobis, quis!</p>
        </div>
        <div className="footer-col">
        <h3>contact us<div className="underline"></div></h3>
        <ul>
          <li className="footer-li"><a href="/">+054-465-5924</a></li>  
          <li className="footer-li"><a href="/">+054-465-5924</a></li>  
          <li className="footer-li"><a href="/">FAQ</a></li>  
          <li className="footer-li"><a href="/">Supports</a></li>  
          <li className="footer-li"><a href="/">Questions</a></li>  
        </ul>
        </div>

        <div className="footer-col">
        <h3>Link<div className="underline"></div></h3>
        <ul>
          <li className="footer-li"><Link className="footer-link" href="/">home</Link></li>  
          <li className="footer-li"><Link className="footer-link" href="/">products</Link></li>  
          <li className="footer-li"><Link className="footer-link" href="/">categories</Link></li>  
          <li className="footer-li"><Link className="footer-link" href="/">Features</Link></li>  
          <li className="footer-li"><Link className="footer-link" href="/">Reviews</Link></li>  
        </ul>
        </div>
        <div className="footer-col">
        <h3>Newsletter<div className="underline"></div></h3>
       <p className="footer-li">Subscribe for Latest Updates</p>
       <input type="text" placeholder="Enter your email" className="footer-li footer_textInput" onChange={(event)=>setInputText(event.target.value)}/>
       <button className="btn">Subscribe</button>
        </div>
        </div>
    <div className="footer-row-2">
  <div className="footer-col-2">   
  <div className="SocialIcons">
    <a className="SocialIconLink" href="/" target="_blank" aria-label="facebook" rel="noopener noreferrer">
                    <FaFacebookF/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
                    <FaPinterest/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitter/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                    <FaYoutube/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a> 
                </div> 
            </div>
            <div className="footer-col-2">
            <a className="chat-link" href="/">Let's chat <FaArrowRight/></a>
            </div>
    </div>
        <hr/>
        <p className="copy-right">&copy; 2022 Desy Scott, Inc. All Rights Reserved</p>
        </div>   
</IconContext.Provider>
        </>
    )
}

export default Footer;