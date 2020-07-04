import React from "react";
import ReactDOM from "react-dom";

import "./reset.css";
import App from "./App";
import { GlobalStyles } from './utils';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
