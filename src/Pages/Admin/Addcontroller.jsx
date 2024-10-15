import React from 'react'
import Defaultbutton from '../../Components/Shared/Defaultbutton'
import Adminsidebar from '../../Components/Admin/Adminsidebar'

function Addcontroller() {
  return (
    <>
        <Adminsidebar/>

    <div className=' xxs:w-full xxs:h-full xxs:flex xxs:flex-col xxs:gap-5 xxs:justify-center xxs:items-center xxs:py-5  border border-red-700'>

        <div className="head-area ">
          <h1 className='font-poppins xxs:text-xl font-semibold text-[#38896b]'>Add a controller here</h1>
        </div>
        <div className="slate w-[85%] h-auto bg-[#89deba] rounded-2xl xxs:py-8 xxs:flex xxs:flex-col xxs:items-center">

          <form action="" className='xxs:w-[85%] xxs:h-auto xxs:gap-6 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center'>

            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter'>Controller name :</label>
              <input type="text" name="" className='w-full h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
            </div>


            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter'>Program name :</label>
              <input type="text" name="" className='w-full h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
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

export default Addcontroller