import React, { useState } from 'react';
import "./gallery.css";
import axios from 'axios';

export default function Gallery() {
const [images,setImages] =useState([]);
const [loading,setLoading] =useState(false)
const [error,setError] =useState(false);
const [more,setMore] =useState(1)



const FetchData = async ()=>{
try {
    setLoading(true);
    const response = await axios.get(`https://picsum.photos/v2/list?page=1&limit=${100}`);
    const data = await response.data;
    setImages(data);
} catch (error) {
    console.error("ERROR"+error);
    
    setError(true);
}finally{
    setLoading(false)
}


}


useState(()=>{
FetchData();

},[])

console.log(more);









  return (
<>

<div className="gallry-body">

<center><h1>~dM Gallery. <br /> {images.length}</h1></center>




<div className="galley-grid-container">

{
    images.map((img,i)=>{
        return(<>
        
        <div className="gallery-card">
<img src={img.download_url} alt="" />

        </div>
        
        
        </>)
    })
}



</div>


<center><button onClick={(e)=>{       setMore(more+1)}}>Loadmore</button></center>





</div>







</>  )
}
