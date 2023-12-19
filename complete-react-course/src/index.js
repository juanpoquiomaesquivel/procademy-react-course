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

/* working with forms & multiple states #11
https://www.youtube.com/watch?v=1YYJ-IWeOLk&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=23&pp=iAQB
https://www.youtube.com/watch?v=WWFSpgAp32o&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=24&pp=iAQB
https://www.youtube.com/watch?v=qDuocpeQrhY&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=25&pp=iAQB
https://www.youtube.com/watch?v=MwDfLShn7Fc&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=26&pp=iAQB
https://www.youtube.com/watch?v=7BMHKUrsMUs&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=27&pp=iAQB
https://www.youtube.com/watch?v=yi4_ujhUKcI&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=28&pp=iAQB
https://www.youtube.com/watch?v=jmv83WjCaQU&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=29&pp=iAQB */
