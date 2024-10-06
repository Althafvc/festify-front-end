import React from 'react'
import Navbar from '../Components/Admin/Navbar'
import Adminsidebar from '../Components/Admin/Adminsidebar'
import Admnfooter from '../Components/Admin/Admnfooter'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (

    <>
    <Navbar/>
<div className='wrapper w-full h-full xxs:pb-14 md:pb-0  bg-[#a5f5bd] flex xxs:flex-col md:flex-row xxs:items-center xxs:gap-10 xl:gap-20 xxs:pt-10 md:pt-0'>
<Adminsidebar/>
    <Outlet/>
</div>
     <Admnfooter/>
    </>


   
  )
}

export default AdminLayout