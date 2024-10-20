import React from 'react'
import  { useState } from 'react' 

export default function Otp({ otpLength = 6 }) {
    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""))
    console.log(otpFields);
  return (
    <>
    <div className="container">
        {otpFields.map((value, index ) => {
            return <input key={index} type="text" value={value} />;
        })

        }

    </div>
    </>
  )
}
