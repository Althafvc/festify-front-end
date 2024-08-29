import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminSignup from '../Pages/Admin/AdminSignup'


function Adminroutes() {

  return (
    <Routes>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/signup' element={<AdminSignup/>}/>
    </Routes>
  )
}

export default Adminroutes