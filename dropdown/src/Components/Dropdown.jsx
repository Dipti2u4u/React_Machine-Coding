// import React, { useState } from "react";

// const Dropdown = ({ options }) => {
//   const [firstdropdown, setFirstdropdown] = useState("");
//   const [seconddropdown, setSeconddropdown] = useState("");
//   const [isSeconddropdownDisabled, setisSeconddropdownDisabled] =
//     useState(true);
//   const handleChange = (e) => {
//     const selectedValue = e.target.value;
//     setFirstdropdown(selectedValue);
//     setisSeconddropdownDisabled(false);
//     setSeconddropdown("");
//   };
//   const handleSeconddropdownChange = (e) => {
//     setSeconddropdown(e.target.value);
//   };
//   const seconddropdownOptions =
//     firstdropdown === "Fruites"
//       ? ["Apple", "Orange", "Mango"]
//       : firstdropdown === "Vegetables"
//       ? ["Cabbage", "Carrot", "Tomatoes"]
//       : [];

//   return (
//     <>
//       <select value={firstdropdown} onChange={handleChange}>
//         <option value="" disabled>
//           Choose An Option
//         </option>
//         {options.map((items, index) => (
//           <option key={index} value={items}>
//             {items}
//           </option>
//         ))}
//       </select>
//       <select
//         value={seconddropdown}
//         disabled={isSeconddropdownDisabled}
//         onChange={handleSeconddropdownChange}
//       >
//         <option value="" disabled>Choose An Option</option>
//         {seconddropdownOptions.map((item, index) => (
//           <option key={index} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// };

// export default Dropdown;

/* -------------------------Type-2 --------------------*/

import React, { useEffect, useState } from "react";

const Dropdown = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState("");
    const [secondDropdownItems, setSecondDropdownItems] = useState([]);
    const [secondSelectedItem, setSecondSelectedItem] = useState("");
    const [isSecondDisabled, setIsSecondDisabled] = useState(true); // separate state

    const Fruits = ['Apple', 'Banana', 'Orange'];
    const Vegetables = ['Cabbage', 'Bitter Gourd', 'Carrot'];

    useEffect(() => {
        if (selectedItem === "") {
            setSecondDropdownItems([]);
            setSecondSelectedItem("");
            setIsSecondDisabled(true); // disable second dropdown
            return;
        }

        if (selectedItem === "Fruits") {
            setSecondDropdownItems(Fruits);
        } else if (selectedItem === "Vegetables") {
            setSecondDropdownItems(Vegetables);
        } else {
            setSecondDropdownItems([]);
        }

        setSecondSelectedItem(""); // reset selection
        setIsSecondDisabled(false); // enable second dropdown
    }, [selectedItem]);

    return (
        <div className="main-container">
            <h2>Dropdown Component</h2>

            {/* First Dropdown */}
            <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="" disabled>Choose a Category</option>
                {items.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>

            {/* Second Dropdown */}
            <select
                value={secondSelectedItem}
                onChange={(e) => setSecondSelectedItem(e.target.value)}
                disabled={isSecondDisabled} // use explicit state
            >
                <option value="" disabled>
                    {isSecondDisabled ? "Select a Category First" : "Choose To Buy"}
                </option>
                {secondDropdownItems.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
