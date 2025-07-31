import React from "react";
import "./styles.css";

const Step1 = ({ formData, nextStep,handleChange,error }) => {
  return (
    <div className="main-container">
      <div className="user-container">
        <h3>UserInfo</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name..."
          value={formData.name}
          onChange={handleChange}
        />
        {error.name & <p className="error">{error.name}</p>}
        <input
          type="email"
          placeholder="Emter your Email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email & <p className="error">{error.email}</p>}
        <span className="btn-container">
          <button onClick={nextStep}>Next</button>
        </span>
      </div>
    </div>
  );
};

export default Step1;
