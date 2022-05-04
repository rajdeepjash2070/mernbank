import React from 'react'
import Navbar from "./Navbar"
import "./Home.css"
import homeimage from "./bankhomepage1.PNG"
import homeimage2 from "./bankhomepage2.PNG"
const Home = () => {
  return (
    <div>
    <Navbar/>
    <img src={homeimage} class="img-fluid" alt="..."/>
    <img src={homeimage2} class="img-fluid" alt="..."/>
    
    </div>
   
   
  )
}

export default Home