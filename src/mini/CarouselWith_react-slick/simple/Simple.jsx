import axios from 'axios';
import React, { useState } from 'react';
import Slider from 'react-slick';

export default function Simple() {

const [images,setImages]  =useState([]);
 const [loading,setLoading] =useState(false)

const FetchData =  async () =>{
    try {
        setLoading(true);
    const response = await axios.get(`https://picsum.photos/v2/list?page=2&limit=10`);
    const data = await response.data;
    setImages(data)
    console.log(data);
    } catch (error) {
        
        console.log("ERROE"+error);
        
    }finally{ setLoading(false)}
}
const loadingImages = [1,2,3,4,5,6,7,8,9,0]


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  
  };

useState(()=>{
    FetchData()
},[])
  return (<>

<section className='seaction'>
<div className="simple-caousel">
<h1>{images.length}</h1>

{
    loading ? 
    (<>
<Slider {...settings}>


{
    loadingImages.map((_,i) =>{
return(<>

<div  className="card1_loading">
     <div class="movie--isloading">
            <div class="loading-image">
              <div class="img"></div>
            </div>
            <div class="loading-content">
                <div class="loading-main-text"></div>
              </div>
            </div>
</div>



</>)
    })
}

</Slider>       
    </>)
    :
    (<>
<Slider {...settings}>
{
    images.map((img,i) =>{
return(<>

<div style={{backgroundImage:`url(${img.download_url})`}} className="card1">
<img src={img.download_url} alt="" />
<p>
<mark>{img.author}</mark>
</p>
</div>



</>)
    })
}

</Slider>    
    
    </>)
}




</div>


    
</section>





</>  )
}
