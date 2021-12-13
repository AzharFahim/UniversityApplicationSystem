import React from 'react'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import About from '../../Pages/About/About'
import Home from '../../Pages/Home/Home'
import Profile from '../../Pages/Profile/Profile'
import Register from '../../Pages/Register/Register'
import UniInfo from '../../Pages/UniInfo/UniInfo'
import Signin from '../../Pages/Signin/Signin'
import Result from '../../Pages/Result/Result'
import Admin from '../../Pages/Admin/Admin'

function Router() {
    return (
        <div>
           <BrowserRouter>

           <Routes>
              
             <Route exact path='/' element={<Home />} />
             <Route exact path='/about' element={ <About />} /> 
             <Route exact path="/profile" element={<Profile/>} />
             <Route exact path="/register" element={<Register/>} />
             <Route exact path="/uniinfo" element={<UniInfo/>} />
             <Route exact path="/signin" element={<Signin/>} />
             <Route exact path="/result" element={<Result/>} />
             <Route exact path="/admin" element={<Admin/>} />
                 
             
            </Routes>
              
             
           </BrowserRouter>
        </div>
    )
}

export default Router
