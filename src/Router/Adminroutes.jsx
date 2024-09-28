import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminSignup from '../Pages/Admin/AdminSignup'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminLayout from '../Layouts/AdminLayout'


function Adminroutes() {

  return (
    <Routes>
      <Route path='/' element={<AdminLayout/>}>
        <Route path='/home' element={<AdminHome/>}/>
        </Route>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/signup' element={<AdminSignup/>}/>
    </Routes>
  )
}

export default Adminroutes