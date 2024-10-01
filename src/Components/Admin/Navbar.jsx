import React, { useState } from 'react'
import Navlogo from '../../assets/logos/Transparents/nav-logo-transparent.png'
import sampleProfileImg from '../../assets/images/otpbg.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

  const [profile, setProfile] = useState(false);

  const [isMenuOpen, setismenuOpen] = useState(false)

  const handleMenutoggle = () => {
    setismenuOpen(!isMenuOpen)
  }
  return (
    <>

      <header className='flex shadow-md py-2 px-4 sm:px-10 bg-[#62d09efa] font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
          <a href="javascript:void(0)"><img src={Navlogo} alt="logo" className='w-36 ' />
          </a>

          <div id="collapseMenu"
            className={`max-lg:hidden lg:!block ${isMenuOpen ? 'block' : 'hidden'} max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            <ul
              className='lg:flex gap-x-20 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='mb-6 hidden max-lg:block'>
                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                </a>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <a href='javascript:void(0)'
                  className='hover:text-[#007bff] text-white block font-bold text-[23px] font-abhaya hover:underline'>Home</a>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-white block font-bold text-[23px] font-abhaya hover:underline'>About</a>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-white block font-bold text-[23px] font-abhaya hover:underline'>Contact</a>
              </li>
            </ul>
          </div>

          <div className='flex items-center max-lg:ml-auto space-x-5 md:gap-10'>
          <div className="profile w-14 h-14 rounded-full md:flex justify-center items-center hidden">

            {profile ? (
              <img src={sampleProfileImg} alt="profile not found" className='w-full h-full rounded-full' />
            ) : (
              <AccountCircleIcon sx={{ width: '100%', height: '100%' }} className='text-[#D9D9D9]' />
            )}
          </div>

        
          <button id="toggleOpen" className='lg:hidden !ml-7' onClick={handleMenutoggle}>
            {!isMenuOpen ? <MenuIcon size={40} className='text-gray-700 ' /> : <CloseIcon size={40} className='text-black' />}
          </button>


          <div className={isMenuOpen ? 'fixed z-10 top-[96px] left-0 right-0 h-[200px] bg-white ease-out duration-500' : 'fixed top-[-100%] ease-out duration-500 '}>
              <ul>
                <li className='max-lg:border-b max-lg:py-3 px-3 text-black hover:text-cyan-400 text-[15px] block font-semibold'>Home</li>
                <li className='max-lg:border-b max-lg:py-3 px-3 text-black hover:text-cyan-400 text-[15px] block font-semibold'>About</li>
                <li className='text-black hover:text-cyan-400 text-[15px] block font-semibold max-lg:border-b max-lg:py-3 px-3'>Contact</li>
              </ul>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default Navbar