import React, { useState } from 'react' // Import React and useState for state management
import Defaultbutton from '../../Components/Shared/Defaultbutton' // Import the default button component
import Adminsidebar from '../../Components/Admin/Adminsidebar' // Import the Admin sidebar component
import BasicAlerts from '../../Components/Shared/BasicAlerts' // Import a shared alert component
import axiosInstance from '../../Instances/Axiosinstance' // Import axios instance for API requests
import { useNavigate } from 'react-router-dom' // Import useNavigate for programmatic navigation
import { useForm } from 'react-hook-form' // Import useForm hook for form handling and validation

function Addprogram() {
  // useForm hook for form handling, register is used for input binding and validation
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  // State for alert visibility and message, initialized to false and empty values
  const [alert, setAlert] = useState({ visible: false, type: '', msg: '' });

  const navigate = useNavigate(); // Initialize the navigate hook for navigation after form submission

  // Function to handle form submission
  async function onsubmit(data) {
    console.log(data);
    
    // Transform form data into the required format before sending it to the server
    const transformedData = {      
      numberofClasses: data.numberofClasses,
      numberofSections: data.numberofSections,
      numberofStudents: data.numberofStudents,
      programName: data.programName,
      programType: data.programType,
      numberofVenues: [{ on: data.on, off: data.off }] // Handle nested venue data
    };

    try {
      // Send the transformed data to the server via POST request
      const response = await axiosInstance.post('/admin/addprogram', transformedData);
      const result = response.data;

      // Check if the server returned a valid result
      if (!result) {
        setAlert({ visible: true, type: 'error', msg: result.message || 'Account not registered' });
      } else {
        // If success, show success alert and navigate to home after 1 second
        setAlert({ visible: true, type: 'success', msg: result.message || 'Festival registered successfully' });
        setTimeout(() => { navigate('/admin/home') }, 1000);
      }
    } catch (err) {
      // If an error occurs during the request, show error alert with the error message
      setAlert({ visible: true, type: 'error', msg: err.response.data.message });
      console.log(err.response, 'An error occurred during festival registration');
    }
  }

  // Automatically hide alert after 1 second
  if (alert) setTimeout(() => { setAlert({ visible: false, type: '', msg: '' }) }, 1000);

  return (
    <>
      {/* Admin sidebar component */}
      <Adminsidebar height="h-auto" />

      <div className="wrapper xxs:w-full xxs:h-full xxs:flex xxs:flex-col xxs:gap-5 xxs:justify-center xxs:items-center xxs:py-5">
        <div className="head-area">
          <h1 className='font-poppins xxs:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#38896b] xxs:text-center'>
            Add your program details here
          </h1>
        </div>

        {/* Form container with background styling */}
        <div className="slate w-[85%] h-auto bg-[#89deba] rounded-2xl xxs:py-8 xxs:flex xxs:flex-col xxs:items-center">

          {/* Form starts here */}
          <form onSubmit={handleSubmit(onsubmit)} className='xxs:w-[85%] xxs:h-auto xxs:gap-6 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center'>
            
            {/* Program name input */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter' htmlFor='programName'>Program name :</label>
              <input type="text" placeholder='Program name' name="programName" className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
              {...register('programName', {
                required: 'program name is required', // Validation: required
                minLength: {
                  value: 3,
                  message: 'Program name must be at least 3 characters long' // Validation: min length
                }
              })} />
              {/* Display error message if validation fails */}
              {errors.programName && <span className="text-red-600">{errors.programName.message}</span>}
            </div>

            {/* Program type input */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter' htmlFor='programType'>Program type :</label>
              <input type="text" placeholder='Program type' name="programType" className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
              {...register('programType', {
                required: 'program type is required',
                minLength: {
                  value: 3,
                  message: 'Program type must be at least 3 characters long'
                }
              })}
              />
              {errors.programType && <span className="text-red-600">{errors.programType.message}</span>}
            </div>

            {/* Number of classes input */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter' htmlFor='numberofClasses'>No of classes :</label>
              <input type="number" placeholder='No of classes' name="numberofClasses" className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
              {...register('numberofClasses', {
                required: 'This field is required',
                valueAsNumber: true,
                validate: {
                  positive: value => value > 0 || 'This field must contain a valid number', // Custom validation: must be a positive number
                },
              })}
              />
              {errors.numberofClasses && <span className="text-red-600">{errors.numberofClasses.message}</span>}
            </div>

            {/* Number of students input */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter' htmlFor='numberofStudents'>No of students :</label>
              <input type="number" placeholder='No of students' name="numberofStudents" className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
               {...register('numberofStudents', {
                required: 'This field is required',
                valueAsNumber: true,
                validate: {
                  positive: value => value > 0 || 'This field must contain a valid number', // Custom validation: positive number
                },
              })}
              />
              {errors.numberofStudents && <span className="text-red-600">{errors.numberofStudents.message}</span>}
            </div>

            {/* Number of sections input */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <label className='xxs:font-semibold font-inter' htmlFor='numberofSections'>No of sections :</label>
              <input type="number" placeholder='No of sections' name="numberofSections" className='w-full h-[30px] rounded-md pl-3 py-2 border-b-2 border-gray-300 focus:border-b-sky-800 focus:outline-none'
               {...register('numberofSections', {
                required: 'This field is required',
                valueAsNumber: true,
                validate: {
                  positive: value => value > 0 || 'This field must contain a valid numberr',
                },
              })}
              />
              {errors.numberofSections && <span className="text-red-600">{errors.numberofSections.message}</span>}
            </div>

            {/* Venues inputs (on/off) */}
            <div className="inp-outline xxs:w-full xxs:h-auto xxs:flex xxs:flex-col xxs:gap-1">
              <p className='xxs:font-semibold font-inter'>No of venues :</p>
              <div className="inp-area xxs:flex xxs:gap-10 xxs:mt-2">
                
                {/* Offstage venues input */}
                <div className="offstage xxs:flex xxs:gap-3">
                  <label htmlFor="off" className='xxs:font-semibold font-inter'>off</label>
                  <input type="number" name="off" className='h-[30px] xxs:w-[50px] pl-3 rounded-md focus:border-b-sky-800 focus:outline-none'
                  {...register('off', {
                    required: 'This field is required',
                    valueAsNumber: true,
                    validate: {
                      positive: value => value >= 0 || 'This field must contain a valid number',
                    },
                  })}
                  />
                  {errors.off && <span className="text-red-600">{errors.off.message}</span>}
                </div>

                {/* Onstage venues input */}
                <div className="onstage xxs:flex xxs:gap-3">
                  <label htmlFor="on" className='xxs:font-semibold font-inter'>on</label>
                  <input type="number" name="on" className='h-[30px] xxs:w-[50px] pl-3 rounded-md focus:border-b-sky-800 focus:outline-none'
                  {...register('on', {
                    required: 'This field is required',
                    valueAsNumber: true,
                    validate: {
                      positive: value => value >= 0 || 'This field must contain a valid number',
                    },
                  })}
                  />
                  {errors.on && <span className="text-red-600">{errors.on.message}</span>}
                </div>
              </div>
            </div>

            {/* Display alert message when visible */}
            {alert.visible && <BasicAlerts type={alert.type} msg={alert.msg} />}

            {/* Submit button */}
            <Defaultbutton value={'Submit'} classname={'bg-[#14ae86] text-white text-xl mr-5'}/>
            </form>
        </div>
      </div>
    </>
  );
}

export default Addprogram;
