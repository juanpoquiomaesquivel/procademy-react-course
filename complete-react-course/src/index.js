import React from "react"; // it was mandatory in older version of React, in every component file (good practice)
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

/* setting styles & attr dynamiclly #17
https://www.youtube.com/watch?v=wzEYMppNpps&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=37&pp=iAQB
https://www.youtube.com/watch?v=lSrihnhBNGI&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=38&pp=iAQB */
