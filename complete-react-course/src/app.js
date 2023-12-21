import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

const products = [
    {
        pID: 1,
        pName: "Fresh Milk",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: true,
        image: "images/fresh-milk.png",
        price: 40,
    },
    {
        pID: 2,
        pName: "Cottage Cheese",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10,
    },
    {
        pID: 3,
        pName: "Brocoli",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15,
    },
    {
        pID: 4,
        pName: "oranges",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: true,
        image: "images/oranges.png",
        price: 20,
    },
    {
        pID: 5,
        pName: "Olive oil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14,
    },
];

function App() {
    let [newProductList, updateProductList] = useState(products);

    function createProduct(product) {
        // console.log(product);
        updateProductList([product, ...newProductList]);
    }

    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <CreateProduct createProduct={createProduct}></CreateProduct>
                <ProductList newProductList={newProductList}></ProductList>
            </div>
        </div>
    );
}

export default App;
