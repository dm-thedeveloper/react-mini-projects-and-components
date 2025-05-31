import React, { useState } from 'react';
import "./video.css";
import axios from 'axios';
import Slider from 'react-slick';
export default function Video() {  
const [paly,setPaly] =useState(false);
const [images,setImages] =useState([]);
const [loading,setLoading]= useState(false)
const [erroe,setError] =useState(false);

const FetchData =  async()=>{
try {
  setLoading(true);
  const response =await axios.get(`https://picsum.photos/v2/list?page=9&limit=10`);
const data = await response.data ;
setImages(data);
} catch (error) {
console.error("ERRROR" + error);
setError(true);
}
finally{
  setLoading(false);
}


}

useState(()=>{
FetchData();

},[]);




const settings = {


className:"slidr",
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
  return (
<>
<div className="auto-carousel">

<div className="carousel-nineghty-per">

<Slider {...settings} >
{
  images.map((img,i)=>{

    return(<>
    
    <div className="carousel-images">
  <img src={img.download_url} className="carousel-img"  />
</div>
    
    
    </>)
  })
}

</Slider>


</div>


<div className="paly--pause">
<h1>{images.length}</h1>
<button onClick={()=>setPaly(!paly)}>{paly?"Pause":"Play"}</button>
</div>


</div>


</>

)
}
