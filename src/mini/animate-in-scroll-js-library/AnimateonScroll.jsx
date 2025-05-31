import React,{useEffect, useState} from 'react';
import "./animateonscroll.css";
import Aos from 'aos';

import "aos/dist/aos.css";

export default function AnimateonScroll() {
    const [open,setOpen] =useState(false);
    
    useEffect(() => {
        Aos.init({
            once: false,
            offset:200,
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
        // Aos.refresh()
      }, []);
  return (<>
<div className="animateonscroll-body">


<div className="section2">
<h1  data-aos-duration = {3000}  data-aos-delay = {300} data-aos="flip-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
<h2 data-aos="fade-right">Lorem ipsum dolor sit.</h2>
<h3 data-aos="fade-up-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati!</h3>
<p data-aos="flip-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima rerum aliquam ipsum perferendis.</p>

</div>



{/* <Section title={"box 1"} bgcolor='red' colour='white' /> */}
<div  data-aos="fade-left" className="section">AOS</div>
<div className="section"  data-aos="fade-up-right">AOS</div>
<div className="section"  data-aos="fade-up-left">AOS</div>
<div className="section" data-aos="fade-down-left">AOS</div>
<div className="section" data-aos="flip-left">AOS</div>
<div className='section' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"></div>

<div className="section" data-aos="flip-right">AOS</div>
<div className="section2">
<h1  data-aos="flip-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
<h2 data-aos="fade-right">Lorem ipsum dolor sit.</h2>
<h3 data-aos="fade-up-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati!</h3>
<p data-aos="flip-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima rerum aliquam ipsum perferendis.</p>

</div>
<div className="section" data-aos="flip-up">AOS</div>
<div className="section" data-aos="flip-down">AOS</div>
<div className="section" data-aos="zoom-in">AOS</div>
<div className="section" data-aos="zoom-in-down">AOS</div>
<div className="section" data-aos="zoom-in-left">AOS</div>
<div className="section2">
<h1  data-aos="flip-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
<h2 data-aos="fade-right">Lorem ipsum dolor sit.</h2>
<h3 data-aos="fade-up-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati!</h3>
<p data-aos="flip-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima rerum aliquam ipsum perferendis.</p>

</div>
<div className="section" data-aos="zoom-out-left">AOS</div>
<div className="section2">
    {
        open?
    <p  data-aos="zoom-in" className='section3'> <center><h1><button onClick={()=>setOpen(!open)}>X</button></h1></center> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima rerum aliquam ipsum perferendis.</p>
:
<button onClick={()=>setOpen(!open)}><h1>PopUp</h1></button>

    }


</div>
{/* <Section   */}
{/* // data-aos="fade-left" */}
{/* // title={"box 2"} bgcolor='red' colour='white' /> */}
{/* <Section  data-aos="fade-right" title={"box 3"} bgcolor='red' colour='white' /> */}
{/* <Section title={"box 4"} bgcolor='red' colour='white' /> */}
{/* <Section title={"box 5"} bgcolor='red' colour='white' /> */}
{/* <Section title={"box 6"} bgcolor='red' colour='white' /> */}
{/* <Section title={"box 7"} bgcolor='red' colour='white' /> */}
{/* <Section title={"box 8"} bgcolor='red' colour='white' /> */}
</div>








</>  )
}



function Section({title,bgcolor="white",colour="black"}) {


    return(<>
    
    <section style={{backgroundColor:bgcolor, color:colour}} className='section'>{title}</section>
    </>)
    
}