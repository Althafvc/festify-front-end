import React from 'react'
import Navbar from '../Components/Admin/Navbar'
import Adminsidebar from '../Components/Admin/Adminsidebar'
import Admnfooter from '../Components/Admin/Admnfooter'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (

    <>
    <Navbar/>

<div className='flex'>
    <Adminsidebar/>
    <Outlet/>
     </div>
     <Admnfooter/>
    </>


   
  )
}

export default AdminLayout