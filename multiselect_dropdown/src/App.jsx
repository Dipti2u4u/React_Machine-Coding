import React, { useState, useRef } from "react";
import "./index.css";

const optionsList = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Pineapple"];

function CustomMultiSelect() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
    setShowDropdown(false);
  };

  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="multi-select-container" style={{ width: "300px", position: "relative" }}>
      <div
        className="input-box"
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          minHeight: "40px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
      >
        {selectedItems.map((item) => (
          <span
            key={item}
            style={{
              backgroundColor: "#eee",
              margin: "2px",
              padding: "4px 8px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {item}
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(item);
              }}
              style={{ marginLeft: "6px", cursor: "pointer", color: "red" }}
            >
              ×
            </span>
          </span>
        ))}
        <span style={{ marginLeft: "auto" }}>▼</span>
      </div>

      {showDropdown && (
        <div
          className="dropdown"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            zIndex: 10,
            maxHeight: "150px",
            overflowY: "auto",
          }}
          ref={dropdownRef}
        >
          {optionsList
            .filter((opt) => !selectedItems.includes(opt))
            .map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CustomMultiSelect;

/*------------------------Type-2 -------------------*/
// import React,{useState,useEffect} from "react";
// import axios from 'axios'

// const MultiDropdown = ({Fruits}) => {
//     const [inputValue,setInputValue] = useState("")
//     const [recipes,setRecipes] = useState([])
//     const [selectedItems,setSelectedItems] = useState([])
//     const fetchData = async()=>{
//         const response = await axios.get(`https://dummyjson.com/recipes/search?q=${inputValue}`)
//         setRecipes(response.data.recipes)
//     }
//     useEffect(()=>{
//         if(inputValue.trim() === ""){
//             setRecipes([])
//             return;
//         }
//         fetchData()
//     },[inputValue])
//     const handleSelect = (item)=>{
//         if(selectedItems.includes() !== item.name){
//             setSelectedItems([...selectedItems,item.name])
//         }
//         setInputValue("");
//         setRecipes([]);
//     }
//     const handleRemove = (item)=>{
//         setSelectedItems(selectedItems.filter((i) => i !== item));
//     }

//     return (
//         <div className="main-container">
//             <h3>MultiSelect Dropdown</h3>
//             <div className='sub-container'>
//                 <div className='input-container'>
//                     {selectedItems.map((item,index)=>(
//                         <span key={index} onClick={()=>handleRemove(item)}>{item} ✕</span>
//                     ))}
//                     <input type="text" 
//                     placeholder='Choose an Item ...' 
//                     value={inputValue} 
//                     onChange={(e)=>setInputValue(e.target.value)}
//                     />
//                     <span className='dropdown-marker'>{'\u25BC'}</span>
//                 </div>
//                {recipes.length > 0 &&
//                  <div className='recipes-container'>
//                  {recipes.map((item)=>(
//                      <div key={item.id} className='recipes' onClick={()=>handleSelect(item)}>
//                          {item.name}
//                      </div>
//                  ))}
//                  </div>
//                }
//             </div>
//         </div>
//     )
// }
// export default MultiDropdown