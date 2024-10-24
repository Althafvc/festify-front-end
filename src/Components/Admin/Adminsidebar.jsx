import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminSidebar({ height = 'h-screen' }) {
  const navigate = useNavigate()
  return (
    <>
      <div className={`wrapper xxs:hidden md:block md:w-[250px] w-[300px] ${height} flex justify-center items-center bg-[#4da87e]`}>
        <div className="items flex flex-col justify-center items-center h-full w-full">
          <ul className="flex flex-col gap-8 h-full w-full items-center mt-10">
            <li className="text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins" onClick={() => navigate('/admin/home')}>Results live</li>
            <li className="text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins" onClick={() => navigate('/admin/addprogram')}>Add festival</li>
            <li className="text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins" onClick={() => navigate('/admin/additem')}>Add items</li>
            <li className="text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins" onClick={() => navigate('/admin/addcontroller')}>Add controller</li>
            <li className="text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins" onClick={() => navigate('/admin/addgroup')}>Add groups</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
