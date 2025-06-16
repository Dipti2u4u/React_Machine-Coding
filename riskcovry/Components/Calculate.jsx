// import React, { useEffect, useState } from "react";
// import "./Calculate.css";

// const Calculate = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [selectedValue, setSelectedValue] = useState("");
//   const [total, setTotal] = useState(null);
//   const [sortValue, setSortValue] = useState("");
//   const [monthlyValues, setMonthlyValues] = useState([]);

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSelect = (e) => {
//     setSelectedValue(e.target.value);
//   };

//   useEffect(() => {
//     const num1 = parseFloat(inputValue);
//     const num2 = parseFloat(selectedValue);
//     if (!isNaN(num1) && !isNaN(num2)) {
//       setTotal(num1 * num2);
//     } else {
//       setTotal(null);
//     }
//   }, [inputValue, selectedValue]);

//   useEffect(() => {
//     const divider = parseFloat(sortValue);
//     if (!isNaN(divider) && divider !== 0 && total !== null) {
//       const dividedTotal = total / divider;
//       const distributedValue = (dividedTotal / 12).toFixed(2);
//       const months = [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//       ];
//       const values = months.map((month) => ({
//         month,
//         amount: distributedValue,
//       }));
//       setMonthlyValues(values);
//     } else {
//       setMonthlyValues([]);
//     }
//   }, [sortValue, total]);

//   return (
//     <div className="main-container">
//       <div className="sub-container">
//         <h3>XYZ Calculator</h3>
//         <div>
//           <span>Enter the Value : </span>
//           <input type="number" value={inputValue} onChange={handleChange} />
//         </div>
//         <div style={{ marginTop: "20px" }}>
//           <span>Select an Option : </span>
//           <select value={selectedValue} onChange={handleSelect}>
//             <option value="">--Select--</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             <option value="40">40</option>
//           </select>
//         </div>
//         <div>
//           <h4>Total: {total !== null ? total : "N/A"}</h4>
//         </div>
//         <div>
//           <span>Sort : </span>
//           <input
//             type="number"
//             value={sortValue}
//             onChange={(e) => setSortValue(e.target.value)}
//           />
//         </div>

//         {monthlyValues.length > 0 && (
//           <div style={{ marginTop: "20px" }}>
//             <h4>Monthly Distribution</h4>
//             <table border="1" cellPadding="8">
//               <thead>
//                 <tr>
//                   <th>Month</th>
//                   <th>Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {monthlyValues.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.month}</td>
//                     <td>{item.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Calculate;




import React, { useEffect, useState } from "react";
import "./Calculate.css"
import { fetchData } from "../Services/api";

const Calculate = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [total, setTotal] = useState(null);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [sortedValue, setSortedValue] = useState(null);
  const [monthlyAmount, setMonthlyAmount] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = await fetchData();
        setDropdownValues(data);
      } catch (err) {
        console.log("error fetching data", err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let num1 = parseFloat(inputValue);
    let num2 = parseFloat(selectedValue);

    if (!isNaN(num1) && !isNaN(num2)) {
      let result = num1 * num2;
      setTotal(result);
    } else {
      setTotal(0);
    }
  }, [inputValue, selectedValue]);

  useEffect(() => {
    let divider = parseFloat(sortedValue);
    if (!isNaN(divider) && divider !== 0 && total !== null) {
      const dividedAmount = (total / divider).toFixed(2);
      const distributed = months.map(() => dividedAmount);
      setMonthlyAmount(distributed);
    } else {
      setMonthlyAmount([]);
    }
  }, [total, sortedValue]);

  return (
    <div className="main-container">
      <div className="container">
        <h4>XYZ Calculator</h4>
        <div>
          <span>Enter a Value : </span>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>Select a Value : </span>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="">--Select an option--</option>
            {dropdownValues.map((values, index) => (
              <option key={index}>{values}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Total : {total}</h3>
        </div>
        <div>
          <span>Sort : </span>
          <input
            type="number"
            value={sortedValue}
            onChange={(e) => setSortedValue(e.target.value)}
          />
          <table
            border="1"
            style={{
              borderCollapse: "collapse",
              marginTop: "20px",
              width: "50%", // Set to 100% to make the table responsive
              tableLayout: "fixed", // Distribute columns evenly
            }}
          >
            <thead>
              <tr>
                <th>Month</th>
                <th>Expenses</th>
              </tr>
            </thead>
            <tbody>
              {months.map((month, index) => (
                <tr key={index}>
                  <td>{month}</td>
                  <td>
                    {monthlyAmount.length > 0 ? monthlyAmount[index] : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
