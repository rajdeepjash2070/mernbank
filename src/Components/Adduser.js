import React from 'react'
import { useState } from 'react'
 import Navbar from './Navbar'
 import axios from "axios"
 import { useNavigate } from 'react-router-dom'
const Adduser = () => {
    const history=useNavigate();
    const [inputs,setInputs]=useState({
       

        accountnumber:"",
       phonenumber:"",
       pin:"",
       amount:"",
          });

          const handleChange=(e)=>{
            setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
            }))
          }

          const sendRequest=async()=>{
            await axios.post("http://localhost:8000/bankusers",{
              accountnumber:String(inputs.accountnumber),
              phonenumber:String(inputs.phonenumber),
              pin:String(inputs.pin),
              amount:Number(inputs.amount)
             
            }).then(res=>res.data);
            console.log(inputs.accountnumber);
          }
         
          const handleSubmit=(e)=>{
            e.preventDefault();
           
            sendRequest().then(()=>history('/6237ef9dc7e813318033b124'))
          }

  return (
    <div>
<form onSubmit={handleSubmit}>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Account Number</label>
<input type="text" class="form-control" id="validationDefault01" value={inputs.accountnumber} onChange={handleChange} name='accountnumber' required/>
</div>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Account Holder's Pin Code</label>
<input type="text" class="form-control" id="validationDefault01" value={inputs.pin} onChange={handleChange} name='pin' required/>
</div>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Account Holder's Phonenumber</label>
<input type="text" class="form-control" id="validationDefault01" value={inputs.phonenumber} onChange={handleChange} name='phonenumber' required/>
</div>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Account Holder's Amount in Bank</label>
<input type="text" class="form-control" id="validationDefault01" value={inputs.amount} onChange={handleChange} name='amount' required/>
</div>
<button type="submit" class="btn btn-primary">Add Account</button>
</form>
    </div>
  )
}

export default Adduser