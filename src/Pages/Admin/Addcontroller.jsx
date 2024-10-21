import React, { useState } from 'react'
import Defaultbutton from '../../Components/Shared/Defaultbutton' // Import a shared button component
import Adminsidebar from '../../Components/Admin/Adminsidebar' // Import the Admin sidebar component
import axiosInstance from '../../Instances/Axiosinstance' // Import axios instance for API calls
import BasicAlerts from '../../Components/Shared/BasicAlerts' // Import alert component for showing messages
import { useNavigate } from 'react-router-dom' // Import hook for programmatic navigation
import { useForm } from 'react-hook-form' // Import hook for form handling

function Addcontroller() {

  // Initialize react-hook-form to handle form state, validation, and errors
  const { register, handleSubmit, formState: { errors } } = useForm();

  // State for managing alert visibility, type, and message
  const [alert, setAlert] = useState({ visible: false, type: '', msg: '' })

  // Initialize navigation hook
  const navigate = useNavigate()

  // Function to handle form submission asynchronously
  async function onsubmit(data) {
    try {
      // API call to submit form data to the backend
      const response = await axiosInstance.post('/admin/addcontroller', data)
      const result = response.data

      // If submission fails, show an error alert
      if (!result.success) {
        setAlert({ visible: true, type: 'error', msg: err.response.data.message || 'controller adding failed' })

      } else {
        // On successful submission, show a success alert and navigate to the admin home page
        setAlert({ visible: true, type: 'success', msg: result.message || 'controller added' })
        setTimeout(() => navigate('/admin/home'), 3000);
      }

    } catch (err) {
      // Catch and display any errors during API call
      setAlert({
        visible: true,
        type: 'error',
        msg: err?.response?.data?.message || 'Something went wrong'
      });
    }
  }

  // Auto-hide the alert after 1 second if it is visible
  if (alert) setTimeout(() => { setAlert({ visible: false, type: '', msg: '' }) }, 3000);

  return (
    <>
      <Adminsidebar /> {/* Render the admin sidebar */}

      {/* Wrapper for the entire content with responsive classes */}
      <div className='wrapper xxs:w-full xxs:h-full xxs:flex xxs:flex-col xxs:gap-5 xxs:justify-center xxs:items-center xxs:py-5'>
        
        {/* Heading for the page */}
        <div className="head-area ">
          <h1 className='font-poppins xxs:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#38896b]'>Add a controller here</h1>
        </div>

        {/* Form container */}
        <div className="slate w-[85%] h-auto bg-[#89deba] rounded-2xl xxs:py-8 xxs:flex xxs:flex-col xxs:items-center">

          {/* Form to handle adding a controller */}
          <form onSubmit={handleSubmit(onsubmit)} className='xxs:w-[85%] xxs:h-auto xxs:gap-6 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center'>
            
            {/* Controller Name Input Field */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter'>Controller name :</label>
              <input 
                type="text" 
                name="controllerName" 
                placeholder='Controller name' 
                className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
                {...register('controllerName', {
                  required: 'This field is required', // Validation: required
                  pattern: {
                    value: /^[A-Za-z\s]+$/, // Validation: only alphabets and spaces
                    message: 'Only alphabetic characters are allowed'
                  }, 
                  minLength: {
                    value: 3, // Validation: min length of 3 characters
                    message: 'controller name should contain 3 letters minimum'
                  }
                })}
              />
              {/* Display validation errors for controller name */}
              {errors.controllerName && <span className="text-red-600">{errors.controllerName.message}</span>}
            </div>

            {/* Program Name Input Field */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter'>Program name :</label>
              <input 
                type="text" 
                name="programName" 
                placeholder='Program name' 
                className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
                {...register('programName', {
                  required: 'This field is required', // Validation: required
                  pattern: {
                    value: /^[A-Za-z\s]+$/, // Validation: only alphabets and spaces
                    message: 'Only alphabetic characters are allowed'
                  }, 
                  minLength: {
                    value: 3, // Validation: min length of 3 characters
                    message: 'program name should contain 3 letters minimum'
                  }
                })}
              />
              {/* Display validation errors for program name */}
              {errors.programName && <span className="text-red-600">{errors.programName.message}</span>}
            </div>

            {/* Display alert messages if visible */}
            {alert.visible && <BasicAlerts type={alert.type} msg={alert.msg} />}

            {/* Submit button */}
            <div className="btn-area">
              <Defaultbutton value={'Submit'} classname={'bg-[#14ae86] text-white text-xl mr-5'} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addcontroller
