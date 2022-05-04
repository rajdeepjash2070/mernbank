import { Route,Routes } from 'react-router';
import './App.css';
import Adduser from './Components/Adduser';
import Adminhome from './Components/Adminhome';
import Adminlogin from './Components/Adminlogin';
import Checkuser from './Components/Checkuser';
import Home from "./Components/Home";
import Login from './Components/Login';
import Navbar from "./Components/Navbar"
import Register from './Components/Register';
import Transaction from './Components/Transaction';
import Uesrprofile from './Components/Uesrprofile';
import Userdetails from './Components/Userdetails';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/rrrr9883" element={<Adminlogin/>}/>
    <Route path="/6237ef9dc7e813318033b1249883" element={<Adduser/>}/>
    <Route path="/6237ef9dc7e813318033b124" element={<Adminhome/>}/>
    <Route path="/checkuser" element={<Checkuser/>}/>
    <Route path="/register" element={<Register/>}/>
   
    <Route path="/login" element={<Login/>}/>
    <Route path="/users/:id" element={<Userdetails/>}/>
    <Route path="/transactions/:id" element={<Transaction/>}/>
    <Route path="/userprofile/:id" element={<Uesrprofile/>}/>
    </Routes>
    </div>
  );
}

export default App;
