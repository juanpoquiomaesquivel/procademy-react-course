import ProductForm from "./ProductForm";

function CreateProduct() {
    return (
        <div
            style={{
                backgroundColor: "white",
                padding: "10px 20px",
                borderRadius: 2,
            }}
        >
            <ProductForm></ProductForm>
        </div>
    );
}

export default CreateProduct;
