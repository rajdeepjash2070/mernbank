import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Adminlogin = () => {
  const history=useNavigate();
  const [inputs,setInputs]=useState({

bankid:"",
id:"",
password:"",

  });
  const handleChange=(e)=>{
    setInputs((prevState)=>({
...prevState,
[e.target.name]:e.target.value
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if((inputs.bankid==="6237ef9dc7e813318033b124") && (inputs.id==="rrrr") && (inputs.password==="9883")){
   
   history('/6237ef9dc7e813318033b1249883');
    }
    else{
        alert("admin does not exist");
    }
    
  }

  return (
    <div>
    <form className='p-4' onSubmit={handleSubmit}>
    <div class="col-md-4">
    <label for="validationDefault01" class="form-label">BANK ID</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.bankid} onChange={handleChange} name='bankid' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">ID</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.id} onChange={handleChange} name='id' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Password</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.password} onChange={handleChange} name='password' required/>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
    </form>
    
    </div>
  )
}

export default Adminlogin