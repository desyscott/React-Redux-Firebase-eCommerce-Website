import React from "react"
import "./Review.css"
import {reviewData} from "./ReviewData"
import Fade from 'react-reveal/Fade';


const Products=()=>{
    return(
        <>
        <div className="reviewContainer">
            <div  className="reviewHeading">Customers Review</div>
            <div className="reviewWrapper">
                {reviewData.map((review,index)=>{
                    return(
                      <Fade  right big>
                    <div className="reviewCard" key={index}>
                        <img className="reviewImg" src={review.img} alt={review.alt}/>
                        <p className="reviewInfo">
                      <p className="reviewDesc">{review.desc}</p>
                      <p className="reviewTitle">{review.name}</p>
                        </p>
                    </div>
                    </Fade>
                )})}
            </div>
        </div>
        </>
    )


}

export default Products;