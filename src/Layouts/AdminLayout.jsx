import React from 'react'
import Navbar from '../Components/Admin/Navbar'
import Adminsidebar from '../Components/Admin/Adminsidebar'
import Admnfooter from '../Components/Admin/Admnfooter'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (

    <>
    <Navbar/>
    <div className="flex xxs:flex-col md:flex-row xxs:h-aut0  lg:h-screen bg-[#a5f5bd]  border-4 border-black">
<Adminsidebar/>
    <Outlet/>
    </div>
     <Admnfooter/>
    </>


   
  )
}

export default AdminLayout