import React from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';



const url="http://localhost:8000/bankusers";
const fetchHandler= async()=>{

    return await axios.get(url).then((res)=>res.data)

}
const Checkuser = () => {
    const history=useNavigate();
    const [bankuser,setBankuser]=useState();
 
   
      
      useEffect(() => {
        fetchHandler().then(data=>setBankuser(data.bankuser))
        
       
      },[]);
      const [inputs,setInputs]=useState({
  
        accountnumber:"",
        phonenumber:"",
     
      
          });

          const handleChange=(e)=>{
            setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
            }))
          }

          const checkuser=()=>{
   
            bankuser.filter((bankuser)=>{
              if(bankuser.accountnumber.toLowerCase().includes((inputs.accountnumber).toLocaleLowerCase())){
              
                if(bankuser.phonenumber.toLowerCase().includes((inputs.phonenumber).toLocaleLowerCase())){
                return history('/register')
                }

                else{
                  alert('Your Account Does not exist in our Bank')
                }
               
              }
           
            })
            
              }
            const handleSubmit=(e)=>{
                e.preventDefault();
                
               checkuser();
                // sendRequest().then(()=>history('/'))
                
            }
  return (
    <div>
    <form className='p-4' onSubmit={handleSubmit}>
    <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Your Account Number</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.accountnumber} onChange={handleChange} name='accountnumber' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.phonenumber} onChange={handleChange} name='phonenumber' required/>
  </div>
 
  <button type="submit" class="btn btn-primary">Check Your Account</button>
    </form>
<div>





</div>
    </div>
  )
}

export default Checkuser