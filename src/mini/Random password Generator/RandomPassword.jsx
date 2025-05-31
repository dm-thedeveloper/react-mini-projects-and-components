import React, { useEffect, useRef, useState } from 'react';
import "./randompassword.css";




export default function RandomPassword() {
const [length,setLength] =useState(8);
const [password,setpassword] =useState("");
const [allowChar,setAllowChar] =useState(false);
const [allowNumbers,setAllowNumbers]=useState(false)
const copyRef = useRef(null)

const CopyPasswordtoClipboard = ()=>{
copyRef.current?.select();
copyRef.current?.setSelectionRange(0,100) // optional 
  window.navigator.clipboard.writeText(password)
}





const GenerateRandomPassword = ()=>{
let  str = "abqwertyuiopasdfghjklzxcvbnmAQWERTYUIOPASDFGHJKLXCVBNM";
let  pass ="";
if(allowNumbers) str+="1234567890";
if(allowChar) str+= "!@#$%^&*()_+=><?/|{}~`,.;:"
for(let i=1;i<=length;i++){

let  char = Math.floor(Math.random()*str.length) 
pass+= str[char]
};
setpassword(pass);

};

useEffect(()=>{
  GenerateRandomPassword()
},[length,allowNumbers,allowChar])



  return (<>
  <div className="randomPasswordGenerator_body">
  <center><h1>Random Password Generator</h1></center>

<div className="random--div">

  <div className="screen">
    <input type='text' readOnly  ref={copyRef} value={password} className="show" />
    <button onClick={CopyPasswordtoClipboard}> Copy</button>
  </div>

<div className="generate">
  <div className="range">
<input onChange={(e)=>setLength(e.target.value)} min={"8"} value={length} max={"100"} step={"1"}  type="range" name="" id="customRange" />
<label htmlFor="">Length <span>({length})</span></label>
</div>
<div className="numbers">
  <input onClick={()=>setAllowNumbers(!allowNumbers)}  type="checkbox" name="" id="customCheckbox" />
  <label htmlFor='customCheckbox'>Numbers</label>
</div>

<div className="numbers">
  <input onClick={()=>setAllowChar(!allowChar)} type="checkbox" name="" id="char" />
  <label htmlFor="char">Characters</label>
</div>

</div>


<p className='developer'>Developed By : Dost Muhammad</p>
  
</div>




  </div>
  
  
  </>
  )
}
