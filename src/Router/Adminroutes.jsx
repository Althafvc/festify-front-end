import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminSignup from '../Pages/Admin/AdminSignup'
import AdminHome from '../Pages/Admin/AdminHome'
import Addcontroller from '../Pages/Admin/Addcontroller'
import AdminLayout from '../Layouts/AdminLayout'
import Addprogram from '../Pages/Admin/Addprogram'
import Addgroup from '../Pages/Admin/Addgroup'
import Additem from '../Pages/Admin/Additem'


function Adminroutes() {

  return (
    <Routes>
      <Route path='/' element={<AdminLayout/>}>
        <Route path='/home' element={<AdminHome/>}/>
        <Route path='/addcontroller' element = {<Addcontroller/>}/>
        <Route path='/addprogram' element = {<Addprogram/>}/>
        <Route path='/addgroup' element = {<Addgroup/>}/>
        <Route path='/additem' element = {<Additem/>}/>
        
        </Route>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/signup' element={<AdminSignup/>}/>
    </Routes>
  )
}

export default Adminroutes