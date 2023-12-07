import "./app.css";

function App() {
    /* const p = document.createElement("p");
    p.textContent = "This is a demo paragraph!";
    return p; */ // it is complex using pure javascript #7

    let msg = "awesome";
    return (
        // cannot return more than one html component
        <div>
            <h1 className="myHeader">This is my header</h1>
            <p className="myParagraph">This is my first {msg} component</p>
        </div>
    ); // #6 y 7
    // every jsx tag must be closed, like <input></input>
}

export default App;
