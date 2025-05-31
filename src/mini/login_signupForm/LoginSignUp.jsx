import React, { useState } from 'react';
import "./loginsignup.css"

export default function LoginSignUp() {
    const [activebtn,setActivebtn]=useState(true)
  return (<>  
<div className="loginsignupBody">


<div className="formBody">
    <h1> <center><span style={{color:"blue"}}>{activebtn?"Login":"Signup"}</span> Form</center></h1>
    <div className="login--signup-btn">
<button onClick={()=>setActivebtn(true)} className={activebtn?"active_btn":"non--active"}>Login</button>
<button onClick={()=>setActivebtn(false)} className={activebtn?"non--active":"active_btn"}>Signup</button>

    </div>

{
    activebtn?
    <div className="form--login">
<form action="">

<div className="input"><input type="text" placeholder='email' />
<input type="password" placeholder='password' />
</div>
<div className='forget'>
<p>Forget Password ?</p>
</div>
<button>Login</button>

</form>

    </div>

    :
   
    <div className="form--login">
<form action="">

<div className="input">
<input type="text" placeholder='name' />
    <input type="text" placeholder='email' />
<input type="password" placeholder='password' />
</div>
{/* <div className='forget'>
<p>Forget Password ?</p>
</div> */}
<button>Signup</button>

</form>

    </div>
}






</div>




</div>
  
  
  
  
  </>  )
}
