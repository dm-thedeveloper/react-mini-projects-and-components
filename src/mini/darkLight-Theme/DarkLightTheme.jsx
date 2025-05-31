import React, { useState } from 'react';
import "./darklighttheme.css"
// import { backgroundClip } from 'html2canvas/dist/types/css/property-descriptors/background-clip';
// import { color } from 'html2canvas/dist/types/css/types/color';

function DarkLightTheme() {
    const [darkBg,setDarkbg] =useState(false)

const light= {
    backgroundColor:"white",
    color:"black"
}


const dark= {
    backgroundColor:"black",
    color:"cyan"
}


 const   DarkLightTheme = ()=>{

setDarkbg(!darkBg)


 }

  return (<>
  
  
  
  <div onClick={DarkLightTheme} style={darkBg?dark:light} className="dark-light-theme-body">

<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ducimus repellat provident.</h1>

  </div>
  
  
  
  
  
  
  </>  )
}

export default DarkLightTheme