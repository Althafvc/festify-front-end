import React from 'react'
import Navbar from '../../Components/Admin/Navbar'

function AdminHome() {
  return (
   <>
   <div className="wrapper w-[100vw] h-[100vh] bg-[#a5f5bd] xxs: flex justify-center pt-12">
    <div className="slate w-[80%] h-[80%] bg-[#89deba] rounded-2xl xxs:flex xxs:flex-col xxs:gap-7 ">
      <div className="heading xxs:w-full xxs:h-[60px] xxs:flex xxs:justify-center xxs:items-center">
        <h1 className='font-aclonica text-[#06744C] xxs:text-xl '>PROGRAM NAME</h1>
      </div>

      <section className='xxs:w-full xxs:ml-5  xxs:flex xxs:flex-col gap-5border border-blue-900'>
        <h3 className='xxs:font-semibold font-aclonica text-sm xxs:mb-2'>Results live</h3>

        <table  className='xxs:w-[80%]'>
          <tr>
          <td className='font-poppins text-sm'>Group name</td>
          <td className='font-poppins text-sm'>Mark</td>
          </tr>
          <tr>
          <td className='font-poppins text-sm'>Group name</td>
          <td className='font-poppins text-sm'>Mark</td>
          </tr>
          <tr>
          <td className='font-poppins text-sm'>Group name</td>
          <td className='font-poppins text-sm'>Mark</td>
          </tr>
          <tr>
          <td className='font-poppins text-sm'>Group name</td>
          <td className='font-poppins text-sm'>Mark</td>
          </tr>
        </table>
      </section>


      <section className='xxs:ml-5'>
      <h3 className='xxs:font-semibold font-aclonica text-sm xxs:mb-4'>Talents now</h3>
      <div className="data-wrap">

     
      
      <div className="subsec font-bold font-aclonica xxs:w-full xxs:text-xs xxs:ml-10">sub junior

      <table  className='xxs:w-[80%] xxs:mt-2'>
          <tr>
          <td className='font-poppins xxs:text-sm font-normal'>student name</td>
          <td className='font-poppins xxs:text-sm font-normal'>Mark</td>
          </tr>
          </table>

      </div>

      <div className="subsec font-bold font-aclonica xxs:w-full xxs:text-xs xxs:ml-10 xxs:mt-3">junior

      <table  className='xxs:w-[80%] xxs:mt-2'>
          <tr>
          <td className='font-poppins xxs:text-sm font-normal'>student name</td>
          <td className='font-poppins xxs:text-sm font-normal'>Mark</td>
          </tr>
          </table>

      </div>


      <div className="subsec font-bold font-aclonica xxs:w-full xxs:text-xs xxs:ml-10 xxs:mt-3">senior

      <table  className='xxs:w-[80%] xxs:mt-2'>
          <tr>
          <td className='font-poppins xxs:text-sm font-normal'>student name</td>
          <td className='font-poppins xxs:text-sm font-normal'>Mark</td>
          </tr>
          </table>

      </div>


      </div>
    
          
      </section>

      
    </div>
   </div>
   </>
  )
}

export default AdminHome