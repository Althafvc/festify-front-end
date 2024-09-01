import React from "react";


function Defaultinput ({type, placeholder, classname}) {

    return (
        <>
<input 
    type={type} 
    placeholder={placeholder} 
    className={`rounded-[5px] pl-3 py-2 border ${classname} focus:outline-sky-800`} 
/>        </>
    )
}

export default Defaultinput