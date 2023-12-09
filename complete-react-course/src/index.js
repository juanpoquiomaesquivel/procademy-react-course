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

/* Child Components & complex jsx & bootstrap #3
https://www.youtube.com/watch?v=FtpXyC3LXds&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=9&pp=iAQB
https://www.youtube.com/watch?v=JI-dxkq7ezI&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=10&pp=iAQB
https://www.youtube.com/watch?v=qy9MxbQ2GUQ&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=11&pp=iAQB */
