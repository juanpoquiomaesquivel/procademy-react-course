import "./app.css";
import Products from "./Components/Products"; // #9 child component

function App() {
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <Products></Products>
            </div>
        </div>
    );
}

export default App;
