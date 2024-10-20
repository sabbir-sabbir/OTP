import React from 'react'
import  { useState } from 'react' 

export default function Otp({ otpLength = 6 }) {
    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""))
    const HandleKeyDown = (e) => {
        const key = e.key 
        if(isNaN(key)) {
            return; 
        }
        console.log(key);
        const copyOtpFields = [...otpFields];
        copyOtpFields[index] = key;


    };
  return (
    <>
    <div className="container">
        {otpFields.map((value, index ) => {
            return <input key={index} type="text" value={value} onKeyDown={(e)=>HandleKeyDown(e,index)} />;

        })

        }

    </div>
    </>
  )
}
