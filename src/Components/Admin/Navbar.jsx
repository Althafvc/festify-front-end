import React, { useState } from 'react';
import Navlogo from '../../assets/logos/Transparents/nav-logo-transparent.png';
import sampleProfileImg from '../../assets/images/otpbg.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [profile, setProfile] = useState(false);
  const [isMenuOpen, setismenuOpen] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const navigate = useNavigate();

  const handleMenutoggle = () => {
    setismenuOpen(!isMenuOpen);
  };

  const handleisArrowclicked = () => {
    setIsArrowClicked(!isArrowClicked);
  };

  function handleNavigation(route) {
    navigate(route);
    setIsArrowClicked(false); 
  }

  return (
    <>
      <header className='flex shadow-md py-2 px-4 sm:px-10 bg-[#62d09efa] font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
          <button onClick={handleisArrowclicked} className='md:hidden'>
            {!isArrowClicked ? <KeyboardArrowDownIcon sx={{
        fontSize: {
          xxs: 20,
          xs: 30,
          sm: 40,
          md: 50,
          lg: 60,
          xl: 70,
          '2xl': 80
        }
      }}  className='text-gray-700'/> : <KeyboardArrowUpIcon sx={{
        fontSize: {
          xxs: 20,
          xs: 30,
          sm: 40,
          md: 50,
          lg: 60,
          xl: 70,
          '2xl': 80
        }
      }} className='text-gray-700' />}
          </button>

          <div
            className={`dropdown hidden xxs:block md:hidden transition-all duration-300 ease-in-out ${isArrowClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} absolute xxs:w-auto xxs:h-auto bg-[#4da87e] top-[110px] left-0`}
          >
            <ul className='flex flex-col gap-3 h-full w-full pl-6 pr-16 pt-5 pb-3'>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('/admin/home')}
              >
                Results live
              </li>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('/admin/addprogram')}
              >
                Add festival
              </li>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('/admin/additem')}
              >
                Add items
              </li>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('/admin/addcontroller')}
              >
                Add controller
              </li>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('/admin/addgroup')}
              >
                Add groups
              </li>
            </ul>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img src={Navlogo} alt="logo" className='w-36 '/>
          </a>








          
          <ul
          className='hidden md:flex'>
          <li className=' max-lg:py-3 px-3'>
            <a href='javascript:void(0)'
              className='hover:text-[#007bff] text-[#007bff] block font-bold text-[15px] lg:text-lg xl:text-xl'>Home</a>
          </li>
          <li className=' max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-[#333] block font-bold text-[15px] lg:text-lg xl:text-xl'>About</a>
          </li>
          <li className=' max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-[#333] block font-bold text-[15px] lg:text-lg xl:text-xl'>Contact</a>
          </li>
          
        </ul>


          <div
            className={`dropdown hidden xxs:block md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} absolute xxs:w-auto xxs:h-auto bg-[#4da87e] top-[110px] right-0`}
          >
            <ul className='flex flex-col gap-3 h-full w-full pl-6 pr-16 pt-5 pb-3'>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('/admin/home')}
              >
                Home
              </li>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('')}
              >
                About
              </li>
              <li
                className='text-lg text-white font-semibold cursor-pointer hover:bg-[#338864] h-auto font-poppins'
                onClick={() => handleNavigation('')}
              >
                Contact us
              </li>
            </ul>
          </div>

          <button onClick={handleMenutoggle} className='md:hidden'>
  {!isMenuOpen ? (
    <MenuIcon
      sx={{
        fontSize: {
          xxs: 20,  
          xs: 30,  
          sm: 40,   
          md: 50,   
          lg: 60,  
          xl: 70,   
          '2xl': 80 
        }
      }}
      className="text-gray-700"
    />
  ) : (
    <CloseIcon
      sx={{
        fontSize: {
          xxs: 20,
          xs: 30,
          sm: 40,
          md: 50,
          lg: 60,
          xl: 70,
          '2xl': 80
        }
      }}
      className='text-gray-700'
    />
  )}
</button>


        </div>
      </header>
    </>
  );
}

export default Navbar;
