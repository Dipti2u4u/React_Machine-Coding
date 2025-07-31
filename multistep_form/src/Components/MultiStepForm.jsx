import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [steps, setSteps] = useState(1);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
  });
  const [error, setError] = useState({});

  const validate = () => {
    const newError = {};
    if (steps === 1) {
      if (formData.name.trim() === "") newError.name = "Name is Required";
      if (formData.email.trim() === "") newError.email = "Name is Required";
    } else if (steps === 2) {
      if (formData.address !== "") newError.address = "Address is Required";
      if (formData.state !== "") newError.address = "State is Required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const nextStep = () => {
    if(validate()) {
      setSteps((prev)=>prev + 1)
    }
  }
  const prevStep = () => setSteps((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
    setFormdata({ name: "", email: "", address: "", state: "" });
  };

  let currentComponent;
  if (steps === 1) {
    currentComponent = (
      <Step1
        formData={formData}
        nextStep={nextStep}
        handleChange={handleChange}
        error={error}
      />
    );
  } else if (steps === 2) {
    currentComponent = (
      <Step2
        formData={formData}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        error={error}
      />
    );
  } else if (steps === 3) {
    currentComponent = (
      <Step3
        formData={formData}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    );
  }
  return <div>{currentComponent}</div>;
};

export default MultiStepForm;
