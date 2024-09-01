import React from 'react'
import Defaultinput from '../../Components/Shared/Defaultinput'
import Defaultbutton from '../../Components/Shared/Defaultbutton'


function AdminSignup() {
  return (

    <>
    <div className="wrapper w-[100vw] h-[100vh] bg-[#a5f6bd] flex flex-col justify-center items-center gap-2">
        <div className="form-area w-auto h-auto bg-[#89deba] flex flex-col justify-center items-center rounded-2xl gap-10 px-6 pt-4 pb-10">
          <h1 className='text-white text-4xl font-bold underline font-inter'>Signup</h1>
          <form className=' w-full h-full flex flex-col justify-center items-center gap-6'>
            <Defaultinput type={'text'} placeholder={'Institution name'} classname={'w-[260px]'}/>
            <Defaultinput type={'text'} placeholder={'Institution type'} classname={'w-[260px]'}/> 
            <Defaultinput type={'email'} placeholder={'Email'} classname={'w-[260px]'}/> 
            <Defaultinput type={'password'} placeholder={'Password'} classname={'w-[260px]'}/> 
            <Defaultinput type={'password'} placeholder={'Confirm Password'} classname={'w-[260px]'}/> 
          </form>
        </div>

        <p className='font-abhaya text-[#285c3d] text-xl'>Already have an account <a href="#" className='font-abhaya text-[#307291eb] hover:text-blue-500 hover:underline'>Login</a></p>

        <Defaultbutton value={'Submit'} classname={'bg-[#14ae86] text-white text-xl mr-5'}/>




    </div>
    </>
  )
}

export default AdminSignup