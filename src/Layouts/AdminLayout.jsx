import React from 'react'
import Navbar from '../Components/Admin/Navbar'
import Admnfooter from '../Components/Admin/Admnfooter'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (

    <>
    <Navbar/>
    <div className="flex xxs:flex-col md:flex-row xxs:h-aut0 bg-[#a5f5bd]">
    <Outlet/>
    </div>
     <Admnfooter/>
    </>


   
  )
}

export default AdminLayout