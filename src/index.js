import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import store from "./slices/index.js";

const mountNode = document.getElementById("root"); 
const root = createRoot(mountNode);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)