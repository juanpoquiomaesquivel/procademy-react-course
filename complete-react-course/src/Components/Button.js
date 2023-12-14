import React from "react";

function Button(props) {
    console.log("Button Component executed");
    return (
        <button onClick={props.eventHandler} className="btn btn-primary">
            {props.children}
        </button>
    );
}

export default Button;
