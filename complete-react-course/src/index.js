import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// const header = <h1>This is my first React app</h1>;

// ReactDOM.render(header, document.getElementById("root")); // deprecated

// # 6
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

// #7
// let div = document.getElementById('root');
// div.append(App());

/* passing data via props #6
https://www.youtube.com/watch?v=1Vxe-1V0ADw&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=15&pp=iAQB */
