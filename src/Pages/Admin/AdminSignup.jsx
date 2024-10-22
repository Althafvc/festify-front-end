import React, { useState } from 'react';
import Defaultbutton from '../../Components/Shared/Defaultbutton'; // Importing a shared button component
import { useForm } from 'react-hook-form'; // Importing useForm hook for form handling and validation
import axiosInstance from '../../Instances/Axiosinstance'; // Axios instance for making API calls
import BasicAlerts from '../../Components/Shared/BasicAlerts'; // Alert component for notifications
import { useNavigate } from 'react-router-dom'; // useNavigate hook to redirect to other routes


function AdminSignup() {
  // Using the useForm hook to handle form state and validation
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  const [alert, setAlert] = useState({visible:false, type:'', msg:''})

  // Hook for navigation (redirecting after signup)
  const Navigate = useNavigate(); 

  // Handle form submission
  async function onsubmit(data) {
    
    
    // Destructure the email from the form data
    const email = data.email;
    
    try {
      // Make a POST request to the admin signup endpoint
      const response = await axiosInstance.post('/adminsignup', data);
      
      const result = response.data;

      // Check if the signup was successful or not and set an appropriate alert
      if (!result.success) {
        
        setAlert({visible:true, type:'error', msg:result.message || 'Account registration failed'});
      } else {
        setAlert({visible:true, type:'success', msg:result.message || 'Account registration successful'});

        setTimeout(() => Navigate(`/otp?${new URLSearchParams({email:email, role:'admin'})}`), 2000);
      }
    } catch (err) {
      
      // In case of error, show an error alert
      setAlert({visible:true, type:'error', msg:err.response.data.message || 'Account registration failed'});
      console.log(err.response, 'An error occurred during registration');
    }
  }

  // Hide the alert after 2 second
  if (alert) setTimeout(() => { setAlert({type:'', msg:''}) }, 2000);
  
  return (
    <>
      {/* Wrapper for the whole signup form */}
      <div className="wrapper w-[100vw] h-[100vh] bg-[#a5f6bd] flex flex-col justify-center items-center gap-2">
        <div className="form-area w-auto h-auto bg-[#89deba] flex flex-col justify-center items-center rounded-2xl gap-10   px-6 xxs:pt-4 xs:pt-6 md:pt-8 md:px-10 xl:px-12 pb-10">
          
          {/* Signup form title */}
          <h1 className='text-white text-4xl md:text-5xl font-bold underline font-inter'>Signup</h1>
          
          {/* Form to handle admin signup */}
          <form className='w-full h-full flex flex-col justify-center items-center gap-6 2xl:gap-8 ' onSubmit={handleSubmit(onsubmit)}>
            
            {/* Institution Name input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="text" 
                name="institutionname" 
                placeholder="Institution Name" 
                className="w-[260px] rounded-md pl-3  2xl:pl-5 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none xl:w-[320px] 2xl:w-[360px] 2xl:h-[50px] 2xl:text-xl" 
                {...register('institutionname', {
                  required: 'This field is required',
                  minLength: {
                    value: 3,
                    message: 'Institution name must be 3 characters long'
                  }
                })}
              />
              {/* Error message for institution name */}
              {errors.institutionname && <span className='text-red-600'>{errors.institutionname.message}</span>}
            </div>
           
            {/* Institution Type input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="text" 
                name="institutiontype" 
                placeholder="Institution Type" 
                className="w-[260px] rounded-md pl-3 2xl:pl-5 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none xl:w-[320px] 2xl:w-[360px] 2xl:h-[50px] 2xl:text-xl" 
                {...register('institutiontype', {
                  required: 'This field is required',
                  minLength: {
                    value: 3,
                    message: 'Institution type must be 3 characters long'
                  }
                })}
              />
              {/* Error message for institution type */}
              {errors.institutiontype && <span className='text-red-600'>{errors.institutiontype.message}</span>}
            </div>
            
            {/* Email input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="w-[260px] rounded-md pl-3 2xl:pl-5 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none xl:w-[320px] 2xl:w-[360px] 2xl:h-[50px] 2xl:text-xl" 
                {...register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,
                    message:'Invalid email address'
                  }
                })}
              />
              {/* Error message for email */}
              {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
            </div>
            
            {/* Password input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="w-[260px] rounded-md pl-3 2xl:pl-5 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none xl:w-[320px] 2xl:w-[360px] 2xl:h-[50px] 2xl:text-xl" 
                {...register('password', {
                  required: 'This field is required',
                  validate: value => {
                    if (/[^0-9]/.test(value)) {
                      return 'Password must only contain digits'; // Message if alphabet or non-digit character is entered
                    } else if (!/^\d{8}$/.test(value)) {
                      return 'Password must contain 8 digits'; // Message if it doesn't contain exactly 8 digits
                    }
                  }
                })}
                
                
              />
              {/* Error message for password */}
              {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
            </div>
           
            {/* Confirm Password input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="password" 
                name="confirmpassword" 
                placeholder="Confirm Password" 
                className="w-[260px] rounded-md pl-3 2xl:pl-5 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none xl:w-[320px] 2xl:w-[360px] 2xl:h-[50px] 2xl:text-xl"
                {...register('confirmpassword', {
                  required: 'Please confirm your password',
                  validate: value => value === getValues('password') || 'Passwords do not match',
                })} 
              />
              {/* Error message for confirm password */}
              {errors.confirmpassword && <span className='text-red-600'>{errors.confirmpassword.message}</span>}
            </div>
            
            {/* Submit button for the form */}
            <Defaultbutton value={'Submit'} classname={'bg-[#14ae86] text-white text-xl 2xl:text-2xl mr-5'} clicked={handleSubmit(onsubmit)}/>
          </form>
        </div>
        
        {/* Link to login if the user already has an account */}
        <p className='font-abhaya text-[#285c3d] text-xl xl:text-2xl xl:mt-2'>
          Already have an account?
          <a href="/admin/login" className='font-abhaya text-[#307291eb] hover:text-blue-500 hover:underline'>Login</a>
        </p>

        {/* Display the alert message based on form submission */}
        {alert.visible && (
          <span className='mt-10'> 
            <BasicAlerts  type={alert.type} msg={alert.msg}/>
          </span>
        )}
      </div>
    </>
  );
}

export default AdminSignup;
