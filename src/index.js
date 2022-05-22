import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BookApp from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <BookApp />
  </BrowserRouter>,
  document.getElementById("root")
);
