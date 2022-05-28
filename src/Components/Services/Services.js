import React from "react"
import "./services.css"
import {servicesData} from "./servicesData"


const Services =()=>{
    return(
        <>
        <div className="servicesContainer">
            <div className="servicesHeading">Our Features</div>
            <div className="servicesWrapper">
                {servicesData.map((service,index)=>{
                    return(
                    <div  key={index} className="servicesCard">
                        <img  src={service.img} alt={service.alt} className="servicesImg"/>
                        <p className="servicesInfo">
                      <p className="servicesTitle">{service.name}</p>
                      <p className="servicesDesc">{service.desc}</p>
                      <p className="servicesBtn">{service.button}</p>
                        </p>
                    </div>
                )})}
            </div>
        </div>
        </>
    )


}

export default Services;