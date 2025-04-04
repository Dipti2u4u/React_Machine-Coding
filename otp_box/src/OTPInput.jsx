import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const OTPInput = ({ otplength }) => {
  const [otp, setOtp] = useState(new Array(otplength).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  },[]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < otplength -1) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleKeydown = (e,index)=>{
    if(e.key === "Backspace" && index > 0 && !otp[index]){
      inputRef.current[index - 1].focus()
    }
  }
  return (
    <div>
      {otp.map((digit, index) => (
        <input
          className="input-style"
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e)=>handleKeydown(e,index)}
          ref={(el) => (inputRef.current[index] = el)} // most important part
        />
      ))}
    </div>
  );
};
export default OTPInput;
