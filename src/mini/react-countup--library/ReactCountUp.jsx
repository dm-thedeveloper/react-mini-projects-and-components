import React from 'react'
import "./reactcountup.css";
import CountUp from 'react-countup';
import { useRef } from 'react';
export default function ReactCountUp() {
const countUpRef =useRef(null)

  return (<>
  
  <div className="reactCountUp--body">


    <div>
<CountUp start={0} end={6.3} decimals={1} suffix='K'   decimal='.'  duration={5}/>
<p>Comments</p>
</div>



<div> 

<CountUp start={0} end={17} duration={5} suffix='K'/>
<p>Likes</p>
</div>


<div>
<CountUp start={0} end={11.7}  decimals={1} duration={5} suffix='K'/>
<p>Subscribers</p>
</div>





  </div>
  

  
  
  
  
  </>  )
}
