import React from 'react'

const LoadMore=({ onLoadMoreEvt=()=>{}})=> {
  return (
    <div>
    <button onClick={()=>onLoadMoreEvt()}>LoadMore</button>
    </div>
  )
}

export default LoadMore