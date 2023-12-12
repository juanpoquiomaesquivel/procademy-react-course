import Button from "./Button";

let productCount = 0;

function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
}

function ProductDetails(props) {
    let badgeClass = "badge-margin-left-240 badge ";
    badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="fw-bold my-2" style={{ marginRight: 30 }}>
                {"$" + props.price}
            </h6>
            <Button children="2">-</Button>
            <span style={{ padding: "8px 14px", fontSize: 13 }}>
                {displayFormattedProductCount()}
            </span>
            <Button>+</Button>
            <span className={badgeClass}>
                {props.isAvailable ? "Available" : "Unavailable"}
            </span>
        </div>
    );
}

export default ProductDetails;