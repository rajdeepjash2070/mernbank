import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Uesrprofile = () => {
    const [user,setUser]=useState({});
    const history=useNavigate();
    const id=useParams().id;
    console.log(id);
    useEffect(() => {
        const fetchHandler2=async()=>{
            await axios.get(`http://localhost:8000/users/${id}`).then(res=>res.data).then(data=>setUser(data.user));
        };
        fetchHandler2()
    
     
      }, [id])
      const sendtransaction=()=>{
          history(`/users/${id}`)
      }
  return (
    <div>
    <h2>Your Details
</h2>
<div>
<h6>Your ID in our Bank{id}</h6>
<h6>Your Name{user.name}</h6>
Your Account Number{user.accountnumber}
</div>
<button type='submit' onClick={sendtransaction()} className='btn btn-primary'>Send Money to Someone</button>
    </div>
  )
}

export default Uesrprofile