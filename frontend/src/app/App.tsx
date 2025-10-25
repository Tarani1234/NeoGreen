import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page';
import Dashboard from './dashboard/page';
import Login from './Login/page';


const App = () => {
  return (
     <Router>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/login' element={<Login/>}/>
         </Routes>
     </Router>
  )
}

export default App
