import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

function App() {
    let [newProduct, updateProduct] = useState(null);

    function createProduct(product) {
        // console.log(product);
        updateProduct(product);
    }

    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <CreateProduct createProduct={createProduct}></CreateProduct>
                <ProductList newProduct={newProduct}></ProductList>
            </div>
        </div>
    );
}

export default App;
