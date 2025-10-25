import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Address: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (currentPage === 1) {
      if (formData.name.trim() === "") {
        newErrors.name = "Name is required";
      }
      if (formData.email.trim() === "") {
        newErrors.email = "Email is required";
      }
    }

    if (currentPage === 2) {
      if (formData.Address.trim() === "") {
        newErrors.Address = "Address is required";
      }
      if (formData.phoneNumber.trim() === "") {
        newErrors.phoneNumber = "Phone Number is required";
      }
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // true if valid, false if errors exist
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const nextStep = () => {
    if (validateForm()) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateForm) {
      alert("Form submitted successfully");
    }
    setFormData({
      name: "",
      email: "",
      Address: "",
      phoneNumber: "",
    });
    setCurrentPage(1);
  };

  let currentComponent;
  if (currentPage === 1) {
    currentComponent = (
      <Step1
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        error={error}
      />
    );
  } else if (currentPage === 2) {
    currentComponent = (
      <Step2
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        error={error}
      />
    );
  } else if (currentPage === 3) {
    currentComponent = (
      <Step3
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        prevStep={prevStep}
      />
    );
  }

  return <div>{currentComponent}</div>;
};
export default MultiStepForm;
