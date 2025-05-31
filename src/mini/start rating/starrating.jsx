import React, { useState } from 'react'
import "./star.css"
export default function Starrating() {
  let [hover,,setHover] =useState(0)
  let stars;;
  return (
<>

<div className="star_rating_body">

<h1><center> 
  {
    [...Array(1,2,3,4,5).map((_,index)=>{
return(<>
<i 
onMouseMove={()=>setHover(index)}
style={{color:hover===index?"yellow":""}} class="fa-solid fa-star"></i></>)

    })]
  }
  </center></h1>

</div>




</>
  )
}
