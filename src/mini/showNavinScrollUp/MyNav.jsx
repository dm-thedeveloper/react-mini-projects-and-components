import React, { useEffect, useState } from 'react';
import "./mynav.css"
import ScrollinImages from './ScrollinImages';


export default function MyNav() {

const [showNav,setShowNav] =useState(true);
const [prevScrollY,setPrevScrollY] =useState(0);



const HandleScrool = ()=>{
 const currenScrollY = window.scrollY;
 console.log(currenScrollY);

 if(prevScrollY>currenScrollY){
  setShowNav(true);
 }
 else{
setShowNav(false)
 }
 setPrevScrollY(currenScrollY);
 console.log("Prev",prevScrollY);
 console.log(showNav);
}

useEffect(()=>{
window.addEventListener("scroll",HandleScrool);

},[prevScrollY])








  return (<>
  <div  className="nav--body">
    
<nav className={`${showNav?"Show":"hide"}`} >
    <div className="logo"><h1>LOGO</h1></div>

    <div className="links">
        <ul>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
        </ul>
    </div>
    <div className="registr"><button>Register</button></div>
</nav>
<ScrollinImages/>

  </div>
  
  
  
  
  </>  )
}
