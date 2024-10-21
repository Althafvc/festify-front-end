import React from 'react'
import Defaultbutton from '../../Components/Shared/Defaultbutton'
import Adminsidebar from '../../Components/Admin/Adminsidebar'

function Additem() {

  const inputData = {}

  return (
    <>

    <div className="">
    <Adminsidebar height="h-full" />
    </div>
          

      <div className="wrapper xxs:w-full xxs:h-full xxs:flex xxs:flex-col xxs:gap-5 xxs:justify-center xxs:items-center xxs:py-5">

<div className="head-area xxs:text-center">
  <h1 className='font-poppins xxs:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#38896b]'>Add your items for the program here</h1>
</div>
<div className="slate w-[85%] h-auto bg-[#89deba] rounded-2xl xxs:py-8 xxs:flex xxs:flex-col xxs:items-center">

  <form action="" className='xxs:w-[85%] xxs:h-auto xxs:gap-6 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center'>

    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Item name :</label>
      <input type="text" name="itemname" placeholder='Item name' className='w-full h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
    </div>


    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Duration :</label>
      <input type="text" name="duration" placeholder='Duration' className='w-[55%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
    </div>


    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>item code :</label>
      <input type="text" name="" placeholder='Item code' className='w-[30%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
    </div>


    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Performing method :</label>
      <input type="text" name="" placeholder='Performing method' className='w-[55%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
    </div>


    <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Item details :</label>
      <textarea name="" placeholder='Item details' className='rounded-md xxs:h-36 pl-3 py-2 border-2 focus:border-sky-800 focus:outline-none'></textarea>
    </div>



<div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Item type :</label>
      <input type="text" name="" placeholder='Item type' className='w-[30%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
    </div>


<div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'>Maximum number of participants :</label>
      <input type="text" name="" placeholder='Maximum number of participants' className='w-[30%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
    </div>

<div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
      <label className='xxs:font-semibold font-inter'> Gender:</label>
      <input type="text" name="" placeholder='Gender' className='w-[30%] h-[30px]  rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none' />
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

export default Additem