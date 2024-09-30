import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [firstdropdown, setFirstdropdown] = useState("");
  const [seconddropdown, setSeconddropdown] = useState("");
  const [isSeconddropdownDisabled, setisSeconddropdownDisabled] =
    useState(true);
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setFirstdropdown(selectedValue);
    setisSeconddropdownDisabled(false);
    setSeconddropdown("");
  };
  const handleSeconddropdownChange = (e) => {
    setSeconddropdown(e.target.value);
  };
  const seconddropdownOptions =
    firstdropdown === "Fruites"
      ? ["Apple", "Orange", "Mango"]
      : firstdropdown === "Vegetables"
      ? ["Cabbage", "Carrot", "Tomatoes"]
      : [];

  return (
    <>
      <select value={firstdropdown} onChange={handleChange}>
        <option value="" disabled>
          Choose An Option
        </option>
        {options.map((items, index) => (
          <option key={index} value={items}>
            {items}
          </option>
        ))}
      </select>
      <select
        value={seconddropdown}
        disabled={isSeconddropdownDisabled}
        onChange={handleSeconddropdownChange}
      >
        <option value="" disabled>Choose An Option</option>
        {seconddropdownOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
