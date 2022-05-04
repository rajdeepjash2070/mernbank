import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import "./Adminhome.css";
import Avatar from "./avatar.png"


const url="http://localhost:8000/bankusers";

const fetchHandler= async()=>{

    return await axios.get(url).then((res)=>res.data)

}

const Adminhome = (props) => {
    const [bankuser,setBankuser]=useState();
    const [searchtext,setSearchtext]=useState('')
   
      
      useEffect(() => {
        fetchHandler().then(data=>setBankuser(data.bankuser))
        
       
      },[]);
  
     // console.log(bankuser);
  return (
    <div>
    <form>
        <div class="search-container">
         <input type="text" name="search" placeholder="Search by Phone Number or Account Number " className="search-input" onChange={event=>{setSearchtext(event.target.value)}}/>
        <a href="#" class="search-btn">
                <i class="fas fa-search"></i>      
        </a>
    </div>
    
      </form>



<div>
      {bankuser && bankuser.filter((bankuser)=>{
        if(setSearchtext===""){
          return `Please search any account `
        }
        else if(bankuser.accountnumber.toLowerCase().includes(searchtext.toLocaleLowerCase()) || bankuser.phonenumber.toLowerCase().includes(searchtext.toLocaleLowerCase())){
          
          return bankuser
        }
    
      }).map((bankuser,i)=>(
                             <div className="card-container" key={i}>
                              
                           
                           <div className="card">

<div className="card-body">
<img src={Avatar} class="img-fluid" alt="..."></img>
<div class="text-center card-title">Account Holder's ID:{bankuser._id}</div>
<div class="text-center card-title">Account Holder's Account Number:{bankuser.accountnumber}</div>
<div className='second-prio'>
<div class="text-center ">Account Holder's Phonenumber:{bankuser.phonenumber}</div>
<div class="text-center ">Account Holder's Pin Code:{bankuser.pin}</div>
<div class="text-center ">Account Holder's Amount in Bank:{bankuser.amount}</div>
</div>

</div>
</div>
                               </div>
                            
      ))}
     
</div>



      



    </div>
  )
}

export default Adminhome