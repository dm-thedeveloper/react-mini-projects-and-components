import React, { useState } from 'react';
import "./tabing.css";
import {tabs} from "./tab.js"

export default function Tabing() {
  const [index,setIndex] =useState(0)
  
  return (<>
<div className="tabing-boody">W
<h1 className="heaidng">The Complete Road Map of MERN Stack Developer</h1>



<div className="tabcontent">

<div className="tabs">
    <div className="tabing">
        {
            tabs.map((tab,i)=>{
                return(<>
                
                
              
                <div onClick={()=>{setIndex(i)}} className={`${index===i?"active-tab":"tab"}`} >Day {tab.day}</div>
                
                </>)
            })
        }

    </div>
</div>

{/* {tabs[index].advancedTopics} */}


{
  tabs.map((tab,i)=>{

    return(<>
<div style={{display: index===i?"block": "none",backgroundColor:tab.bgcolor,color:tab.Col0or}} className="content">
<h1 style={{}} className="tecnology">{tab.technology}</h1>



  {tab.advancedTopics}


</div>

    </>)
  })
}



</div>







</div>
  </>
  )
}













