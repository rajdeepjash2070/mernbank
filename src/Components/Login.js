import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"


const url="http://localhost:8000/users";
const fetchHandler= async()=>{

    return await axios.get(url).then((res)=>res.data)

}
const Login = () => {
    const history=useNavigate();
    const [user,setuser]=useState();
  
    useEffect(() => {
      fetchHandler().then(data=>setuser(data.user))
      
     
    },[]);
    const [inputs,setInputs]=useState({
        
       accountnumber:"",
       phonenumber:"",
      password:"",
      
          });
          const handleChange=(e)=>{
            setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
            }))
          }

          const checkuser=()=>{
   
            user.filter((userlogin)=>{
              if(userlogin.phonenumber.toLowerCase().includes((inputs.phonenumber).toLocaleLowerCase()) && userlogin.password.toLowerCase().includes((inputs.password).toLocaleLowerCase())){
              

            if(userlogin.accountnumber.toLowerCase().includes((inputs.accountnumber).toLocaleLowerCase()))
                return history(`/userprofile/${userlogin._id}`)
               
               
              }
           
            })
            
              }
            const handleSubmit=(e)=>{
                e.preventDefault();
                
               checkuser();
               
                
            }




  return (
    <div>
    
    <form className='p-4' onSubmit={handleSubmit}>
  
  <div class="col-md-4 login-container">
    <label for="validationDefault01" class="form-label ">Account Number</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.accountnumber} onChange={handleChange} name='accountnumber' required/>
  </div>
  <div class="col-md-4 login-container">
  <label for="validationDefault01" class="form-label ">Phone Number</label>
  <input type="text" class="form-control" id="validationDefault01" value={inputs.phonenumber} onChange={handleChange} name='phonenumber' required/>
</div>


  <div class="col-md-4 login-container">
    <label for="validationDefault01" class="form-label ">PassWord</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.password} onChange={handleChange} name='password' required/>
  </div>
 
  <button type="submit" class="btn btn-primary ">Login</button>
    </form>
    </div>
  )
}

export default Login