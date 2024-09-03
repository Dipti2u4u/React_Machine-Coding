// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const Pagination = () => {
//   const [Products, setProducts] = useState([]);
//   const [currentPage,setcurrentPage] = useState(1)
//   const itemsperPage = 6

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://dummyjson.com/products");
//         setProducts(response.data.products);
//       } catch (error) {
//         console.log("error fetching the data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const totalPages = Math.ceil(Products.length / itemsperPage)
//   const startIndex = (currentPage-1) * itemsperPage
//   const endIndex = startIndex + itemsperPage

//   const nextPage = ()=>{
//     setcurrentPage((previousPage)=>Math.min(previousPage + 1,totalPages))
//   }

//   const previousPage = ()=>{
//     setcurrentPage((previousPage)=>Math.max(previousPage - 1,1))
//   }

//   return (
//     <>
//       <div style={{display:'flex',justifyContent:'space-around',flexWrap:"wrap"}}>
//         {Products.slice(startIndex,endIndex).map((items) => (
//           <div key={items.id}>
//             <img src={items.thumbnail} alt={items.title} />
//             <h3>{items.title}</h3>
//             <h4> ${items.price}</h4>
//             <button>Add To Cart</button>
//           </div>
//         ))}
//       </div>
//       <div>
//         <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
//         <span>{currentPage} of {totalPages}</span>
//         <button onClick={nextPage} disabled={currentPage===totalPages}>Next</button>
//       </div>
//     </>
//   );
// };

// export default Pagination;

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
import "./Pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const itemsperPage = 6;

  const totalPages = Math.ceil(products.length / itemsperPage);
  const startIndex = (currentPage - 1) * itemsperPage;
  const endIndex = startIndex + itemsperPage;
  const handlePrevious = ()=>{
    setcurrentPage((currentPage)=>currentPage - 1)
  }
  const handleNext = ()=>{
    setcurrentPage((currentPage)=> currentPage + 1)
  }
  const {addToCart} = useContext(CartContext)
  const handleClick = (items)=>{
    addToCart(items)
    console.log(items)
  }
  return (
    <>
      <div className="Container">
        {products.slice(startIndex,endIndex).map((items) => (
          <div key={items.id}>
            <img src={items.thumbnail} alt={items.title} />
            <h3>{items.title}</h3>
            <h5> ${items.price}</h5>
            <button onClick={()=>handleClick(items)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <div className="pag_div">
        <button onClick={handlePrevious} disabled={currentPage === 1}>Prev</button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
