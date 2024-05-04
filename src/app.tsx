import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";

console.log("App loaded");
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
