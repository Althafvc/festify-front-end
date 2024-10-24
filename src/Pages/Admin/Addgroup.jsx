import React from 'react'
import Defaultbutton from '../../Components/Shared/Defaultbutton'
import Adminsidebar from '../../Components/Admin/Adminsidebar'


function Addgroup() {

  return (
    <>
    <Adminsidebar/>
     <div className="wrapper xxs:w-full xxs:h-full xxs:flex xxs:flex-col xxs:gap-5 xxs:justify-center xxs:items-center xxs:py-5">

<div className="head-area ">
  <h1 className='font-poppins xxs:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#38896b]'>Add your groups here</h1>
</div>


<div className="slate w-[85%] h-auto bg-[#89deba] rounded-2xl xxs:py-8 xxs:flex xxs:flex-col xxs:items-center">

  <form action="" className='xxs:w-[85%] xxs:h-auto xxs:gap-6 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center'>

    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
    <label className='xxs:font-semibold font-inter'>Group name :</label>
      <div className="wrapper-2 xxs:flex gap-3 md:gap-5">
      <input type="text" name="" className='xxs:w-[65%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'/>
      <button className='bg-[#14ae86] text-white xxs:w-16 md:w-20 md:h-8 rounded-sm'>Add</button>
      </div>
    </div>


    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Section name :</label>
      <div className="wrapper-2 xxs:flex gap-3 md:gap-5">
      <input type="text" name="" className='xxs:w-[65%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'/>
      <button className='bg-[#14ae86] text-white xxs:w-16 md:w-20 md:h-8 rounded-sm'>Add</button>
      </div>
     
    </div>


    <div className="btn-area">
      <Defaultbutton value={'Submit'} classname={'bg-[#14ae86] text-white text-xl mr-5'}/>
    </div>
  </form>


</div>


</div>
    </>
  )
}

export default Addgroup