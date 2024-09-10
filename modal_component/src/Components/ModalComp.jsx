import React from "react";
import '../App.css'
const ModalComp = ({ onClose }) => {
  return (
    <>
    <div onClick={()=>onClose()}className="modal-wrapper"></div>
      <div className="modal-container">
        <h2>Happy to Connect with you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          laudantium similique reprehenderit nulla omnis porro earum quaerat
          accusantium corrupti, voluptate eveniet. Rem incidunt iusto molestias
          corrupti deleniti quasi magni! Non.
        </p>
        <button className="btn"onClick={() => onClose()}>Close</button>
      </div>
    </>
  );
};
export default ModalComp;
