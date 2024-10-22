import React from 'react'
import OTP from '../Components/Shared/OTP'
import { Route, Routes } from 'react-router-dom'

function CommonRoutes() {

  return (
    <Routes>
        <Route path='/otp' element={<OTP/>}/>
    </Routes>
  )
}

export default CommonRoutes