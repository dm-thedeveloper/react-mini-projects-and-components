
import React, { useReducer, useState } from 'react';


import "./QR.css"
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
let [qrVal,setQrVal] =useState("Dost-M")
let [input,setInput] =useState("");
let [qrFg,setQrFg] =useState("black")
const [inputPlceHolder,setInputPlceHolder] =useState("Enter Your Value")
 // let inpuRef=  useRef("")



const GenerateQRCode = (e)=>{

e.preventDefault();
setQrVal(input)
setInput("")
console.log(input);
if(input===""){ 
    // alert("Write a value");
setQrFg("red");
setInputPlceHolder(":)  Field is Empty")



}

}


  return (<>
  <div className="QRBody">
<header> <center><h1>dM <acronym title="Quick Responce">QR</acronym> Code Generator</h1>  </center></header>

<div className="input">
<input  onClick={()=>{setInputPlceHolder("Enter Your Value");setQrFg("black")}} value={input} onChange={(e)=>{setInput(e.target.value);;}} type="search" placeholder={inputPlceHolder} />
<button onClick={GenerateQRCode}>Gnerate</button>

</div>

<div className="qrscreen">
<QRCode 
// bgColor='red'
fgColor={qrFg}
 size={300}
//  style={{ height: "90%", maxWidth: "100%",width:"100%",color:"red" }}
 value={qrVal}
//  viewBox={`0 0 256 256`}
/>




<h3> <span style={{color:"white"}}>Developer:</span> <u className='me' title='Visit Github'>Dost Muhammad Malhoo</u> <br /> <span style={{color:"white"}}> ( The-MERN-Stack ) </span></h3>
</div>



  </div>
  
  
  
  
  
  
  
  </>
  )
}
