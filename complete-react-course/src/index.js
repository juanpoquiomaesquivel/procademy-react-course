import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// const header = <h1>This is my first React app</h1>;

// ReactDOM.render(header, document.getElementById("root")); // deprecated

// # 6
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

// #7
// let div = document.getElementById('root');
// div.append(App());

/* Understanding React Components #2
https://www.youtube.com/watch?v=yXZ521GXSKo&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=5&pp=iAQB
https://www.youtube.com/watch?v=gIeuSeJYUfw&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=6&pp=iAQB
https://www.youtube.com/watch?v=AO6s3GPLwYI&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=7&pp=iAQB
https://www.youtube.com/watch?v=zQLR0TpHdr4&list=PL1BztTYDF-QMPh8UW3xxk8C6uk2WVfUS3&index=8&pp=iAQB */
