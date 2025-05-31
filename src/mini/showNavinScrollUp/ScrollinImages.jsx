import axios from 'axios';
import React, { useState } from 'react'

export default function ScrollinImages() {
const [Images,setImages] =useState([]);

const FetchImages = async ()=>{
try {
const response = await axios.get(`https://picsum.photos/v2/list?page=2&limit=100;`)
const data =  await response.data;
setImages(data);
console.log(data[0].download_url);

    } catch (error) {
        
console.error("ERRR:" +error);

    }




}
 

useState(()=>{
FetchImages()

},[])
    // https://picsum.photos/v2/list?page=2&limit=100;

  return (
<>

<div className="images-scroll">
{

    Images.map((img,i)=>{
return(<>



<div style={{backgroundImage:`url(${img.download_url})`}} className="img--card">
    <div className="num"><h2>{img.id}</h2></div>
</div>

</>)

    })
}







</div>






</>
  )
}
