import {useState,useEffect}  from 'react'

function useDarkMode() {
    
    const [isDark,setIsDark]=useState(false)
    
    useEffect(()=>{
         if(isDark) {
             window.document.body.classList.add("darkMode")
         }else{
             window.document.body.classList.remove("darkMode")
         }
    },[isDark])
    
  return (
    [isDark,setIsDark]
  )
}

export default useDarkMode