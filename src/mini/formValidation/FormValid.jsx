import React, { useState } from 'react';
import "./formvalid.css"
const Form = () => {

const [name,setName] =useState("");
const [email,setEmail] =useState("");
const [password,setPassword] =useState("");
const [confirmPassword,setConfirmPassword] =useState("");


const [nameErrOr,setnameError] =useState(false);
const [emailErrOr,setemailError] =useState(false);
const [passwordErrOr,setpasswordError] =useState(false);
const [confirmPassswordErrOr,setconfirmPasswordError] =useState(false);

const [nameErrormsg,setNameErrorMasg] =useState("")
const [emailErrormsg,setEmailErrorMasg] =useState("")
const [passwordErrormsg,setPasswordErrorMasg] =useState("")
const [confirmPasswordErrormsg,setConfirmPasswordErrorMasg] =useState("")



const Validate  = (e)=>{
e.preventDefault();


if(name.length<8){
  setNameErrorMasg("Name has at least 8 letters.");
  setnameError(true);
}

if(email.includes("@gmail")){
  setEmailErrorMasg("")
  setemailError(false);
}
else{
  setEmailErrorMasg("Email has not the include @gmail")
  setemailError(true);  
}


if(password.length<8){
  setPasswordErrorMasg("Password has the at leats 8 digits");
  setpasswordError(true);


}

if(password!==confirmPassword){
  setConfirmPasswordErrorMasg("Passwords are not Same.")
  setconfirmPasswordError(true)
  setpasswordError(true);

}
else if(!confirmPassword){
  setConfirmPasswordErrorMasg("Confirm Paswwrord is required");
  setconfirmPasswordError(true)
  setpasswordError(true);

}







}


const SetDfInputs = ()=>{
setnameError(false);
setemailError(false);
setpasswordError(false);
setconfirmPasswordError(false)

setNameErrorMasg("");
setEmailErrorMasg("");
setPasswordErrorMasg("");
setConfirmPasswordErrorMasg("")


}






  return (
    <div className="form-container">
      <form className="form" >
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
          className={`${nameErrOr?"error":"input"}`}

            onChange={(e)=>{setName(e.target.value);SetDfInputs()}}
          />
          <p className='errorMasg'> {nameErrormsg}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e)=>{setEmail(e.target.value);SetDfInputs();}}
            className={`${emailErrOr?"error":"input"}`}

          />
          <p className='errorMasg'> {emailErrormsg}</p>

        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
          className={`${passwordErrOr?"error":"input"}`}
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e)=>{setPassword(e.target.value);SetDfInputs();}}

          />
          <p className='errorMasg'> {passwordErrormsg}</p>

        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value);SetDfInputs();}}
            className={`${confirmPasswordErrormsg?"error":"input"}`}

          />
          <p className='errorMasg'> {confirmPasswordErrormsg}</p>

        </div>
        <button onClick={Validate}  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
