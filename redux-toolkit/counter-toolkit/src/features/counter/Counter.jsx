// import React from "react";

// const Counter = () => {
//   return (
//     <div>
//       <h2>Count : {}</h2>
//       <button>Increment</button>
//       <button>Decrement</button>
//       <button>Reset</button>
//     </div>
//   );
// };
// export default Counter;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
