import React from 'react'

function Adminsidebar() {
  return (
    <>
    <div className="wrapper w-[300px] h-100vh flex justify-center items-center bg-[#4da87e]">

      <div className="items  flex flex-col justify-center items-center h-full w-full">
      <ul className='flex flex-col gap-8 h-full w-full items-center mt-10'>
        
        <li className='text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins'>Results live</li>
        <li className='text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins'>Add items</li>
        <li className='text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins'>Add controller</li>
        <li className='text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins'>Add sections</li>
        <li className='text-xl text-white font-semibold cursor-pointer hover:bg-[#338864] h-[40px] w-full flex justify-center items-center font-poppins'>Add groups</li>
       
      </ul>
      </div>
    </div>
    </>
  )
}

export default Adminsidebar