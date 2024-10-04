import React, { useState } from 'react';
import Defaultbutton from '../../Components/Shared/Defaultbutton';  // Custom button component
import axiosInstance from '../../Instances/Axiosinstance';  // Axios instance for making HTTP requests
import BasicAlerts from '../../Components/Shared/BasicAlerts';  // Alert component for displaying messages
import { useNavigate } from 'react-router-dom';  // React Router hook to navigate programmatically
import { useForm } from 'react-hook-form';  // Hook for managing form state and validation

function AdminLogin() {

  // State for handling alert visibility and message
  const [alert, setAlert] = useState({ visible: false, type: '', msg: '' });

  // React Hook Form setup, destructuring functions for form handling
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  // Hook for navigation after successful login
  const Navigate = useNavigate();


  // Function to handle form submission
  async function onsubmit(data) {
    try {
      // Making a POST request to the '/adminlogin' route with form data
      const response = await axiosInstance.post('/adminlogin', data);
      const result = response.data;

      // If the response doesn't return the expected result, show an error alert
      if (!result) {
        setAlert({ visible: true, type: 'error', msg: result.message || 'Login attempt failed' });
      } else {
        // If login is successful, show success alert and navigate to admin home after a short delay
        setAlert({ visible: true, type: 'success', msg: result.message || 'Login successful' });
        setTimeout(() => Navigate('/admin/home'), 800);
      }
    } catch (err) {
      // Handle errors and display an error alert
      setAlert({ visible: true, type: 'error', msg: err.response.data.message || 'Login attempt failed' });
      console.log(err.response, 'An error occurred during login');
    }
  }

  // Automatically hide the alert message after 800ms if it is visible
  if (alert.visible) setTimeout(() => setAlert({ visible: false, type: '', msg: '' }), 800);

  return (
    <>
      {/* Wrapper for the entire login form */}
      <div className="wrapper w-[100vw] h-[100vh] bg-[#a5f6bd] flex flex-col justify-center items-center gap-2">
        <div className="form-area w-auto h-auto bg-[#89deba] flex flex-col justify-center items-center rounded-2xl gap-10 px-6 sm:px-9 pt-4 md:pt-6 pb-10">

          {/* Form title */}
          <h1 className='text-white text-4xl font-bold underline font-inter lg:text-5xl 2xl:text-6xl'>Login</h1>

          {/* Admin login form */}
          <form onSubmit={handleSubmit(onsubmit)} className='w-full h-full flex flex-col justify-center items-center gap-6'>
            
            {/* Email input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="email"
                name="email"
                placeholder="Email"
                className="w-[260px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none lg:w-[300px] 2xl:h-[50px] 2xl:w-[360px] 2xl:text-xl" 
                {...register('email', {
                  required: 'This field is required',  // Validation rule: field is required
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,  // Validation rule: valid email pattern
                    message: 'Invalid email address'  // Error message
                  }
                })}
              />
              {/* Show error message if email validation fails */}
              {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
            </div>

            {/* Password input field */}
            <div className="inp-area flex flex-col">
              <input 
                type="password"
                name="password"
                placeholder="Password"
                className="w-[260px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none lg:w-[300px] 2xl:h-[50px] 2xl:w-[360px] 2xl:text-xl" 
                {...register('password', {
                  required: 'This field is required',  // Validation rule: field is required
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,  // Validation rule: strong password pattern
                    message: 'Invalid password format'  // Error message
                  }
                })}
              />
              {/* Show error message if password validation fails */}
              {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
              <p className='hover:underline text-[#208a62] font-semibold mt-3 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:mt-5'>Forgot password</p>

            </div>


            {/* Submit button */}
            <Defaultbutton value={'Submit'} classname={'bg-[#14ae86] text-white text-xl lg:text-2xl mr-5 mt-3'} clicked={handleSubmit(onsubmit)} />
          </form>
        </div>

        {/* Link to sign up if user does not have an account */}
        <p className='font-abhaya text-[#285c3d] text-xl lg:text-2xl lg:mt-2'>
          Do not have an account?
          <a href="/admin/signup" className='font-abhaya text-[#307291eb] hover:text-blue-500 hover:underline ml-2'>Signup</a>
        </p>

        {/* Display alert messages (either success or error) based on the login attempt */}
        {alert.visible && (
          <span className='mt-10'> 
            <BasicAlerts type={alert.type} msg={alert.msg} />
          </span>
        )}
      </div>
    </>
  );
}

export default AdminLogin;
