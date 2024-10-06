import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function Admnfooter() {
  return (
    <>
     <div className='footer  w-full h-auto bg-[#308b62] pb-5'>
       <div className='w-[90%] md:flex md:justify-around '>
       <div className="left h-auto flex flex-col items-center gap-5"> 
            <div className="head-area mt-[40px]"><h1 className='font-parafont font-bold text-black w-full text-2xl'>Edumeet</h1></div>
            <div className="icons-area flex gap-10">
                 <FacebookRoundedIcon className='text-white cursor-pointer'sx={{ width: 40, height: 40}}/>
                 <XIcon className='text-white cursor-pointer' sx={{ width: 40, height: 40 }}/>
                 <YouTubeIcon className='text-white cursor-pointer' sx={{ width: 40, height: 40 }}/>
             </div>
        </div>
        <div className=" flex flex-col items-center  gap-6 justify-center  mt-[70px]">
                <h1 className='font-parafont font-bold text-black w-full text-2xl text-center'>Pages</h1>

        
                    <p className='text-black'>Home</p>
                    <p className='text-black'>About us</p>
                    <p  className='text-black'>Services</p>
       
        </div>
        <div className="center flex flex-col items-center  gap-6 justify-center  mt-[70px]">
            <h1 className='font-parafont font-bold text-black w-full text-2xl text-center'>Contact</h1>
            <div className='flex flex-col h-full gap-8 items-center'>
                
                            <span className='flex gap-5'>
                            <PhoneEnabledIcon className='text-white cursor-pointer'sx={{ width: 30, height: 30}}/>
                            <p className='text-black'> +91 9207829846</p>
                            </span>

                            <span className='flex gap-5'>
                            <AccessTimeIcon className='text-white cursor-pointer'sx={{ width: 30, height: 30}}/>
                            <p className='text-black'> Mon - Fri : 9 am - 11 pm</p>
                            </span> 
                            <span className='flex gap-5'>
                            <EmailIcon className='text-white cursor-pointer'sx={{ width: 30, height: 30}}/>
                            <p className='text-black'>althafvellanchola46@gmail.com</p>
                            </span>
            </div>
                        
        </div>
       </div>
    </div>
    </>
  )
}

export default Admnfooter