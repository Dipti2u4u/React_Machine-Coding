import React from "react";
import { generateUsers } from "../utils/generateData";
import VirtualizedTable from "../components/Table/VirtualizedTable";

const Home = () => {
  const users = generateUsers(); // 10,000 users

  return (
    <div>
      <h1>Virtualized Table Example</h1>
      <VirtualizedTable users={users} />
    </div>
  );
};

export default Home;


/*----------------------Before Virtualization -------------------------*/

// import React from "react";
// import { generateUsers } from "../utils/generateData";
// import VirtualizedTable from "../components/Table/VirtualizedTable";

// const Home = () => {
//   const users = generateUsers(); 
//   return (
//     <div>
//       <h1>Virtualized Table Example</h1>
//       <VirtualizedTable users={users} />
//     </div>
//   );
// };

// export default Home;
