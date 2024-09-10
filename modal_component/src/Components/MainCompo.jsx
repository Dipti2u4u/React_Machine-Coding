import React, { useEffect, useState } from "react";
import ModalComp from "./ModalComp";

const MainCompo = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = ()=>{
    setShowModal(false)
  }

  useEffect(()=>{
    if(showModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    //cleanup the effect when the component unmounts
    return ()=>{
      document.body.style.overflow = 'auto'
    }
  },[showModal])
  return (
    <>
      <button className='btn'onClick={()=>setShowModal(true)}>Show Modal</button>
      {showModal && <ModalComp onClose = {handleModalClose}/>}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium rem debitis doloribus saepe, magni et provident repellendus neque dolor ullam libero ut possimus minima reprehenderit dolorem velit exercitationem accusamus.</p>
      <br />
    </>
  );
};

export default MainCompo;
