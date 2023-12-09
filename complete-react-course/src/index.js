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

/* Embedding expresions & JSX Attributes #4
https://www.youtube.com/watch?v=tQyMmB50coo&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=12&pp=iAQB
https://www.youtube.com/watch?v=BvBf8GjsYdw&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=13&pp=iAQB */
