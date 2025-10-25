import React from "react";

const Step2 = ({ formData, handleChange, nextStep, prevStep, error }) => {
  return (
    <div className="user-container">
      <div className="form-container">
        <h3>Address Info</h3>
        <textarea
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          placeholder="Enter Your Address"
        />
        {error.Address && <span className="error">{error.Address}</span>}
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Phone Number"
        />
        {error.phoneNumber && (
          <span className="error">{error.phoneNumber}</span>
        )}
        <div>
          <button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default Step2;
