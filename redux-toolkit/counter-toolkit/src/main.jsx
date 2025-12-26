import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store"; // ✅ FIXED HERE

const root = createRoot(document.getElementById("root"));

console.log("Redux store:", store.getState()); // ✅ Should log { counter: { value: 0 } }

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
