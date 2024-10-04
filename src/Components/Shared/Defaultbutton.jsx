import React from 'react'


function Defaultbutton({ value, clicked, classname }) {
  return (
    <>
      <button className={`outline-2 outline-gray-600 p-2 rounded-sm  w-32 xl:w-40 2xl:w-44 mr-10 font-semibold  active:scale-[.96] duration-200 ease-in-out  shadow-customShadow ${classname}`} onClick={clicked} type="submit">{value}</button>

    </>
  )
}

export default Defaultbutton;