import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import "./Userdetails.css"
import Avatar from "./avatar.png"

const url="http://localhost:8000/bankusers";
const fetchHandler= async()=>{

    return await axios.get(url).then((res)=>res.data)

}
const url3="http://localhost:8000/transaction";
const fetchHandler3= async()=>{

    return await axios.get(url3).then((res)=>res.data)

}

const Userdetails = () => {
   
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
  
        
         const [bankuser,setBankuser]=useState();
       
         useEffect(() => {
           fetchHandler().then(data=>setBankuser(data.bankuser))
           
          
         },[]);
        
         const [inputs,setInputs]=useState({
             
            accountnumber:"",
            phonenumber:"",
          amount:"",
           
               });
               const handleChange=(e)=>{
                 setInputs((prevState)=>({
             ...prevState,
             [e.target.name]:e.target.value
                 }))
               }
               const [transaction,setTransaction]=useState();
               useEffect(() => {
                fetchHandler3().then(data=>setTransaction(data.transaction))
                
               
              },[]);
         const reduceMoney=()=>{
          bankuser.filter((bankuser)=>{
            if(bankuser.accountnumber.toLowerCase().includes((user.accountnumber).toLocaleLowerCase())){
                if(bankuser.phonenumber.toLowerCase().includes((user.phonenumber).toLocaleLowerCase())){
        var a1=(bankuser.amount);
        let x1 = parseInt(a1);
        var b1=(inputs.amount);
        var y1 = parseInt(b1);
        let c1=x1-y1;
        console.log(c1)
         sendRequest1(c1,bankuser._id);
                 return alert('success')
                }
            }
        })
         }  
         
         const sendRequest1=async(c1,bankid)=>{
             
          await axios.put(`http://localhost:8000/bankusers/${bankid}`,{
          
            amount:Number(c1),
              
               }).then(res=>res.data).then(alert('Transferred amount'))
           
            }
const sendMoney=()=>{
  bankuser.filter((bankuser)=>{
    if(bankuser.accountnumber.toLowerCase().includes((inputs.accountnumber).toLocaleLowerCase())){
        if(bankuser.phonenumber.toLowerCase().includes((inputs.phonenumber).toLocaleLowerCase())){
var a=(bankuser.amount);
let x = parseInt(a);
var b=(inputs.amount);
var y = parseInt(b);
var c=x+y;
console.log(c)
 sendRequest(c,bankuser._id);
         return history(`/`)
        }
        else{
          alert('Account does not exist in our bank')
        }
    }
})
}

              const sendRequest=async(c,bankid)=>{
             
              await axios.put(`http://localhost:8000/bankusers/${bankid}`,{
              
                amount:Number(c),
                  
                   }).then(res=>res.data).then(alert('Transferred amount'))
               
                }

                const transactionhistory=async()=>{
                
        await axios.post("http://localhost:8000/transaction",{
                    sendaccount:String(user.accountnumber),
                    receiveaccount:String(inputs.accountnumber),
                    amount:Number(inputs.amount),
                    
                  }).then(res=>res.data);
              
                }
              
             
                 const handleSubmit=(e)=>{
                     e.preventDefault();
                     sendMoney();
                     reduceMoney();
                    transactionhistory();
                     
                 }
                 const transactionpage=()=>{
                   return history(`/transactions/${id}`)
                 }
              
     // name, accountnumber,phonenumber,secondphonenumber,pin,password,confirmpassword
    
  return (
    <div>
  
 
    <div className='user-profile'>
    <div>
    <img src={Avatar} class="img-fluid" alt="Responsive image"></img>
    </div>
    <div className='user-textdetails'>
    <h5>Name: {user.name}</h5>
    <div className='phonenumber'>Your Phonenumber: {user.phonenumber}</div>
   <div className='accountnumber'> Your Account Number:  {user.accountnumber}</div>  
    <div>Your Secondery Phonenumber: {user.secondphonenumber}</div>
    <div> Your Balance: {bankuser && bankuser.filter((amountfind)=>{
      if(user.accountnumber==amountfind.accountnumber){
        return amountfind
      }
    }).map((balance,i)=>(
<div key={i}>
{balance.amount}
</div>

    ))}</div>

    </div>
    </div>
<div className='transfer-container'>




<form className='p-4' onSubmit={handleSubmit}>
  
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Account Number</label>
    <input type="text" class="form-control" id="validationDefault01" value={inputs.accountnumber} onChange={handleChange} name='accountnumber' required/>
  </div>
  <div class="col-md-4">
  <label for="validationDefault01" class="form-label">Phone Number</label>
  <input type="text" class="form-control" id="validationDefault01" value={inputs.phonenumber} onChange={handleChange} name='phonenumber' required/>
</div>
<div class="col-md-4">
<label for="validationDefault01" class="form-label">Transfer Amount</label>
<input type="number" class="form-control" id="validationDefault01" value={inputs.amount} onChange={handleChange} name='amount' required/>
</div>
  <button type="submit" class="btn btn-primary">Transfer</button>
    </form>

</div>


{transaction && transaction.filter((transaction)=>{
if((user.accountnumber)==(transaction.sendaccount)){
  return transaction
}
 }).map((transaction,i)=>(
   <div className='card' key={i}>
  
 
 
  <div class="card-body">
    <h6 >Serial No.{i+1}</h6>
    <h6 >Succcesful Transfer to {transaction.receiveaccount}</h6>
    <h5 className='transfer'><i class="fa-solid fa-circle-check"></i>Transferred Amount   <i class="fa-solid fa-indian-rupee-sign"></i>{transaction.amount}</h5>
  </div>

  </div>
))}


    </div>
  )
}

export default Userdetails