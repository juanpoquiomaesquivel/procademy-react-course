import React from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from './Components/CreateProduct/CreateProduct';

function App() {
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <CreateProduct></CreateProduct>
                <ProductList></ProductList>
            </div>
        </div>
    );
}

export default App;
