import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Simple from './simple/Simple';
import "./carousel.css"
import Video from './videoCarousel/Video';


export default function Carousel() {
  return (
<>
<div className='carouel--body'>
<h1><center>Carousel Section <br /> useing <a href="https://react-slick.neostack.com/" target='_blank'>https://react-slick.neostack.com/</a></center></h1>
  
  
  <Simple/>
  <Video/>
  
  </div>
</>  )
}
