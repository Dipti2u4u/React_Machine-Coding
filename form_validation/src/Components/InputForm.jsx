import React, { useState } from "react";
import "./InputForm.css";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = "Number must be 10 digits";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    console.log("Form submitted successfully", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">LogIn</h2>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-style">{errors.name}</span>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-style">{errors.email}</span>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="number"
            placeholder="Enter Your Number"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <span className="error-style">{errors.number}</span>}
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-style">{errors.password}</span>}
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
