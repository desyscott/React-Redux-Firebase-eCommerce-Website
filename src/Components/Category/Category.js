import React from "react"
import "./Category.css"
import {categoryData} from "./CategoryData"


const Category=()=>{
    return(
        <>
        <div className="CategoryContainer">
            <div  className="CategoryHeading">Our Category</div>
            <div className="CategoryWrapper">
                {categoryData.map((category,index)=>{
                    return(
                    <div className="CategoryCard" key={index}>
                        <img className="CategoryImg" src={category.img} alt={category.alt}/>
                        <p className="CategoryInfo">
                      <p className="CategoryTitle">{category.name}</p>
                      <p className="CategoryDesc">{category.desc}</p>
                      <p  className="CategoryPrice">{category.price}</p>
                      <button className="CategoryBtn">{category.button}</button>
                        </p>
                    </div>
                )})}
            </div>
        </div>
        </>
    )


}

export default Category;