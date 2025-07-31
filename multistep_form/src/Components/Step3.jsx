import React from "react";

const Step3 = ({formData,prevStep,handleSubmit}) => {
  return (
    <div className="main-container">
      <div className="user-container">
        <h3>Review & Submit</h3>
        <p>Name : {formData.name}</p>
        <p>Email : {formData.email}</p>
        <p>Address : {formData.address}</p>
        <p>State : {formData.state}</p>
        <span className="btn-container">
          <button onClick={prevStep}>Prev</button>
          <button onClick={handleSubmit}>Submit</button>
        </span>
      </div>
    </div>
  );
};

export default Step3;
