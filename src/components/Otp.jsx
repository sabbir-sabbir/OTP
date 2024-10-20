import React, { useState } from 'react';

export default function Otp({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));

  const handleKeyDown = (e, index) => {
    const key = e.key;

    // backspace, delete, left/right arrow keys, and digits only

    if (key === "Backspace" || key === "Delete") {
      const newOtpFields = [...otpFields];
      newOtpFields[index] = "";                // Clear the current field on backspace/delete
      setOtpFields(newOtpFields);

      // Move focus to the previous field if it's a backspace


      if (key === "Backspace" && index > 0) {
        e.target.previousSibling.focus();
      }
      return;
    } else if (key >= "0" && key <= "9") {
      const newOtpFields = [...otpFields];
      newOtpFields[index] = key;
      setOtpFields(newOtpFields);

      // Automatically move to the next input field
      if (index < otpLength - 1) {
        e.target.nextSibling.focus();
      }
      return;
    }

    // Prevent other keys (non-digits)
    e.preventDefault();
  };

  return (
    <div className="container">
      {otpFields.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}     // Limit input to 1 character
          onFocus={(e) => e.target.select()} // Automatically select the value on focus
        />
      ))}
    </div>
  );
}
