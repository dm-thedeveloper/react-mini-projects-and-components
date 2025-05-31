import React, { useEffect, useRef, useState } from 'react';
import "./useoutsideclikc.css"

export default function UseOutSideClikc() {

const [showContent,setShowContent] =useState(false)
const ref = useRef(null)

const Clz = (event)=>{

    if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      
    setShowContent(false)

}


useEffect(()=>{

window.document.addEventListener("mousedown",Clz)
window.document.addEventListener("touchstart",Clz)

},[showContent])


  return (<>
  <div className="useOutSideClik--body">
{
showContent?
<div ref={ref} className="content_">
    <h1><center>This is the content</center></h1>
    <p><b>Please <mark>click</mark>  <mark><i>outside</i></mark>  of this to close this. It won't close if you click inside of this content </b></p>
    </div>
:

<div className="open_btn">
<button onClick={()=>setShowContent(true)}>Show Content</button>


</div>
}











  </div>
  
  
  
  
  </>
  )
}
