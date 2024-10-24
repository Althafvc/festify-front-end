import React from 'react'
import Adminsidebar from '../../Components/Admin/Adminsidebar'
function AdminHome() {
  return (
    <>
    <Adminsidebar/>
    <div className="wrapper md:w-full md:h-screen lg:pt-5  bg-[#a5f5bd] flex md:flex-row xxs:justify-center  xl:gap-22 xxs:py-10 md:pt-0">

      <div className="slate md:mt-3 w-auto xxs:px-10 lg:px-20  xxs:pt-8 xxs:pb-10 h-auto pb-10 bg-[#89deba] rounded-2xl xxs:flex xxs:flex-col xxs:gap-7 xs:gap-5 2xl:pb-10 2xl:pl-20 2xl:pr-36">
        <div className="heading xxs:w-full h-auto xxs:flex xxs:justify-center xxs:items-center">
          <h1 className='font-aclonica text-[#06744C] xxs:text-xl sm:text-2xl md:text-3xl  xl:text-5xl 2xl:text-6xl xl:mt-6 2xl:mt-8'>PROGRAM NAME</h1>
        </div>

        <section className='xxs:w-full xxs:ml-5 lg:ml-10 xxs:flex xxs:flex-col xxs:gap-2 xs:gap-3 lg:mt-5'>
          <h3 className='xxs:font-semibold font-aclonica xxs:text-sm sm:text-base xl:text-xl 2xl:text-2xl'>Results live</h3>

          <table className='xxs:w-[80%]'>
            <tr>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Group name</td>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Mark</td>
            </tr>
            <tr>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Group name</td>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Mark</td>
            </tr>
            <tr>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Group name</td>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Mark</td>
            </tr>
            <tr>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Group name</td>
              <td className='font-poppins xxs:text-sm sm:text-base 2xl:text-xl'>Mark</td>
            </tr>
          </table>
        </section>


        <section className='xxs:ml-5 lg:ml-10'>
          <h3 className='xxs:font-semibold font-aclonica xxs:text-sm  sm:text-base xxs:mb-4 xl:text-xl xs:mt-6 sm:mt-8 2xl:text-2xl lg:mt-2'>Talents now</h3>

          <div className="data-wrap">

            <div className="subsec font-bold font-aclonica xxs:w-full xxs:text-xs sm:text-sm xxs:ml-5 lg:text-base
             xxs:mb-5 2xl:text-xl lg:mb-3">sub junior

              <table className='xxs:w-[90%] xxs:mt-'>
                <tr>
                  <td className='font-poppins xxs:text-sm sm:text-base font-normal 2xl:text-xl'>student name</td>
                  <td className='font-poppins xxs:text-sm font-normal sm:text-base 2xl:text-xl'>Mark</td>
                </tr>
              </table>
            </div>


            <div className="subsec font-bold font-aclonica xxs:w-full xxs:text-xs sm:text-sm xxs:ml-5 lg:text-base xxs:mb-5 2xl:text-xl lg:mb-3">Junior

              <table className='xxs:w-[90%] xxs:mt-'>
                <tr>
                  <td className='font-poppins xxs:text-sm sm:text-base font-normal 2xl:text-xl'>student name</td>
                  <td className='font-poppins xxs:text-sm font-normal sm:text-base 2xl:text-xl'>Mark</td>
                </tr>
              </table>
            </div>


            <div className="subsec font-bold font-aclonica xxs:w-full xxs:text-xs sm:text-sm xxs:ml-5 lg:text-base xxs:mb-5 2xl:text-xl">Senior

              <table className='xxs:w-[90%] xxs:mt-'>
                <tr>
                  <td className='font-poppins xxs:text-sm sm:text-base font-normal 2xl:text-xl'>student name</td>
                  <td className='font-poppins xxs:text-sm font-normal sm:text-base 2xl:text-xl'>Mark</td>
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