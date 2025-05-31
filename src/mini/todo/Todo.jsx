import React, { useState } from 'react'

export default function Todo() {
const [todo,setTodo] =useState([]);
const [task,setTask] =useState("");


const add  = ()=>{
    if(!task) return;
    setTodo([...todo,task]);
    setTask("");
}


  return (
    <div style={{padding:"50px"}}>

<input onChange={(e)=>setTask(e.target.value)} value={task} type="text" placeholder='ADD TASK....' />{" "} <button onClick={add}>ADD</button>

{todo.map((t,i)=>{
    return(<>
    
    <li>{t}</li></>)
})}

    </div>
  )
}
