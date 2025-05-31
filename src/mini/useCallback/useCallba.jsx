import React, { useCallback, useState } from 'react'

export default function UseCallback() {
  return (
<>
<UseEffect/>
<hr />
<CallbaHook/>

</>  )
}


function UseEffect(params) {
    const [count,setCount] =useState(0)


const Increament = ()=>{
    setCount((prev)=> prev+1)
}

    return(<>
    
    <h1><center>useEffect</center></h1>
    <center><h2> {count} <button onClick={Increament} >Increament</button> </h2></center>
    
    </>)
}


function CallbaHook() {
    const [count,setCount] =useState(0);
    const [count2,setCount2] =useState(0);
    const incremanet = useCallback(()=>{
setCount((prev)=> prev+1)
    },[count2,count])
return(<>
<h1><center>useCallback</center></h1>
<center onMouseMove={()=>{setCount2(count2+1) ;console.log(count2);
}}> <h1> {count} : <button onClick={incremanet}>Increament</button></h1></center>
</>)

}
