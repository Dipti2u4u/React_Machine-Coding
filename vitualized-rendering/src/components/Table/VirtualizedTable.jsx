import React, { useState, useRef, useEffect, useCallback } from "react";
import "./VirtualizedTable.css";

const VirtualizedTable = ({ users, rowHeight = 40, containerHeight = 500 }) => {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const totalRows = users.length;
  const totalHeight = totalRows * rowHeight;
  const visibleCount = Math.ceil(containerHeight / rowHeight);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(startIndex + visibleCount + 5, totalRows);
  const visibleUsers = users.slice(startIndex, endIndex);

  return (
    <div style={{ width: "600px", border: "1px solid #ccc" }}>
      {/* Sticky Header */}
      <div className="table-header" style={{ display: "flex", height: rowHeight, background: "#f4f4f4", borderBottom: "1px solid #ccc", fontWeight: "bold", position: "sticky", top: 0, zIndex: 1 }}>
        <div style={{ flex: 1, padding: "0 8px" }}>Name</div>
        <div style={{ flex: 1, padding: "0 8px" }}>Email</div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="table-container"
        style={{ height: containerHeight, overflowY: "auto", position: "relative" }}
      >
        <div style={{ height: totalHeight, position: "relative" }}>
          {visibleUsers.map((user, index) => (
            <div
              key={user.email}
              style={{
                position: "absolute",
                top: (startIndex + index) * rowHeight,
                height: rowHeight,
                display: "flex",
                width: "100%",
                borderBottom: "1px solid #ccc",
                alignItems: "center",
                padding: "0 8px",
              }}
            >
              <div style={{ flex: 1 }}>{user.name}</div>
              <div style={{ flex: 1 }}>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedTable;










/*----------------------Before Virtualization -------------------------*/


// import React from "react";
// import "./VirtualizedTable.css";

// const VirtualizedTable = ({ users }) => {
//   return (
//     <div className="table-container">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.email}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VirtualizedTable;
