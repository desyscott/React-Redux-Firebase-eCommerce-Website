import React from 'react'
import "./AuthContainer.css"

const  index=({headline,children})=>{
  return (

          <div className="authContainer">
          <div className="authWrapper">
          {headline && <h2 className="authHeader">{headline}</h2>}
          <div>
          {children && children}
          </div>
          </div>
          </div>
          
  )
}

export default index;