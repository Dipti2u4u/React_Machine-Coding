import React from "react";
import "./styles.css";

const Step1 = ({ formData, handleChange, nextStep, error }) => {
  return (
    <div className="user-container">
      <div className="form-container">
        <h3>User Info</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        {error.name && <span className="error">{error.name}</span>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        {error.email && <span className="error">{error.name}</span>}
        <div>
          <button onClick={nextStep}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default Step1;
