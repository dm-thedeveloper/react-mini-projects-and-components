import React, { useState } from 'react';
import "./model.css"

export default function Model() {
  const [openPopUp,setOpenPopUp] =useState(false)
  
  return (
<>

<div   className="popup--body">

<button onClick={()=>setOpenPopUp(!openPopUp)}>open Pop Up</button>

{ openPopUp && 
  <PopUp openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />

}
</div>


</>
  )
}


function  PopUp({openPopUp,setOpenPopUp}) {
 
  return(<>
  <div className="popup_body">


<div  className={`popup`}>
  <h1>I am The Pop Up</h1>
  <button className='b' onClick={()=>setOpenPopUp(false)}>X</button>
</div>



  </div>
  
  </>)


}