let productCount = 0;
let imageUrl = require("../Images/fresh-milk.png");
let isAvailable = "Available";

let badgeClass = "badge-margin-left-240 badge ";
badgeClass += isAvailable === "Available" ? "bg-success" : "bg-danger";
/* let style = {
    padding: "0 20px",
    // fontSize: 12
    'font-size': 12
}; */

function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
}

function Products() {
    return (
        <ul className="list-group shadow">
            <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 fw-bold mb-2">Fresh Milk</h5>
                        <p className="font-italic text-muted mb-0 small">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora minima vero asperiores nulla. Quis
                            nobis omnis error qui eum temporibus cum a enim
                            ullam beatae, facilis, unde neque quia et?
                        </p>
                        <div className="d-flex align-items-center justify-content-start mt-1">
                            <h6
                                className="fw-bold my-2"
                                style={{ marginRight: 30 }}
                            >
                                $120.00
                            </h6>
                            <button className="btn btn-primary">-</button>
                            <span style={{ padding: "8px 14px", fontSize: 13 }}>
                                {displayFormattedProductCount()}
                            </span>
                            <button className="btn btn-primary">+</button>
                            <span className={badgeClass}>{isAvailable}</span>
                        </div>
                    </div>
                    <img
                        src={imageUrl}
                        alt="Generic"
                        width="100"
                        className="ml-lg-5 order-1 order-lg-2"
                    />
                </div>
            </li>
        </ul>
    );
}

export default Products;
