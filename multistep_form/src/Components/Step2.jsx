import React from "react";
import "./styles.css";

const Step2 = ({ formData, nextStep, prevStep, handleChange }) => {
  return (
    <div className="main-container">
      <div className="user-container">
        <h3>Address-Info</h3>
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="Enter Your State..."
          value={formData.state}
          onChange={handleChange}
        />
        <span className="btn-container">
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </span>
      </div>
    </div>
  );
};

export default Step2;
