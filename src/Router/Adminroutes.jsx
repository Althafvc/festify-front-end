import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminSignup from '../Pages/Admin/AdminSignup'
import AdminHome from '../Pages/Admin/AdminHome'


function Adminroutes() {

  return (
    <Routes>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/signup' element={<AdminSignup/>}/>
        <Route path='/home' element={<AdminHome/>}/>
    </Routes>
  )
}

export default Adminroutes