import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'



const url="http://localhost:8000/users";
const fetchHandler= async()=>{

    return await axios.get(url).then((res)=>res.data)

}
const Register = () => {
  const history=useNavigate();
  const [user,setuser]=useState();

  useEffect(() => {
    fetchHandler().then(data=>setuser(data.user))
    
   
  },[]);
  const [inputs,setInputs]=useState({
name:"",
phonenumber:"",
secondphonenumber:"",

accountnumber:"",
pin:"",
password:"",
confirmpassword:"",



  });
  const handleChange=(e)=>{
    setInputs((prevState)=>({
...prevState,
[e.target.name]:e.target.value
    }))
  }
  const sendRequest=async()=>{
    if(inputs.password === inputs.confirmpassword){

      user.filter((user)=>{
        if(!user.accountnumber.toLowerCase().includes((inputs.accountnumber).toLocaleLowerCase())){
          if(!user.phonenumber.toLowerCase().includes((inputs.phonenumber).toLocaleLowerCase()))
          return history(`/${user._id}`)
        }
      
      })

    await axios.post("http://localhost:8000/users",{
      name:String(inputs.name),
      accountnumber:String(inputs.accountnumber),
      phonenumber:String(inputs.phonenumber),
      secondphonenumber:String(inputs.secondphonenumber),
      pin:String(inputs.pin),
      password:String(inputs.password),
      confirmpassword:String(inputs.confirmpassword),
     
      
    }).then(res=>res.data);
  }
  else{
    alert('Invalid Input')
  }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
 
   
    sendRequest().then(()=>{
      history('/')
    })
    // .then(()=>history(`/http://localhost:8000/users/${user._id}`))
    
  }
  //name, accountnumber,phonenumber,secondphonenumber,pin,password,confirmpassword
  return (
    <div>
    
    <form className='p-4' onSubmit={handleSubmit}>
    <div class="col-md-4">
    <label for="validationDefault01" class="form-label"> Your Name</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.name} onChange={handleChange} name='name' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Account Number</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.accountnumber} onChange={handleChange} name='accountnumber' required/>
  </div>
  <div class="col-md-4">
  <label for="validationDefault01" class="form-label">Phone Number</label>
  <input type="text" class="form-control" id="validationDefault01" value={inputs.phonenumber} onChange={handleChange} name='phonenumber' required/>
</div>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Secondery Phone Number</label>
<input type="text" class="form-control" id="validationDefault01" value={inputs.secondphonenumber} onChange={handleChange} name='secondphonenumber' required/>
</div>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Your Area's Pin Code</label>
<input type="text" class="form-control" id="validationDefault01" value={inputs.pin} onChange={handleChange} name='pin' required/>
</div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">PassWord</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.password} onChange={handleChange} name='password' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Confirm Your PassWord</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.confirmpassword} onChange={handleChange} name='confirmpassword' required/>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
    </form>

    </div>
  )
}

export default Register