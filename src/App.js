
import { Routes, Route } from "react-router-dom";
import './App.css';
import DashBoard from './DashBoard/DashBoard';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from './Shared/Navbar';
import LogIn from './Authentication/LogIn';
import SignUp from './Authentication/SignUp';
// import Planner from './Pages/Planner/Planner';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Appoinmentee from "./Pages/Appoinment/Appoinmentee";


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="mx-w-7xl mx-auto p-5">
      <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element={<DashBoard></DashBoard>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/appoinmet' element={<Appoinmentee></Appoinmentee>}></Route>
        {/* <Route path='/planner' element={<Planner></Planner>}></Route> */}
      </Route>
      
      
    </Routes>

    
    </div>
  );
}

export default App;
