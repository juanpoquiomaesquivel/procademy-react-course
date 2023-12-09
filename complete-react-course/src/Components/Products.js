function Products() {
    return (
        <ul className="list-group shadow">
            <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 fw-bold mb-2">
                            Fresh Milk
                        </h5>
                        <p className="font-italic text-muted mb-0 small">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora minima vero asperiores nulla. Quis
                            nobis omnis error qui eum temporibus cum a enim
                            ullam beatae, facilis, unde neque quia et?
                        </p>
                        <div className="d-flex align-items-center justify-content-between mt-1">
                            <h6 className="fw-bold my-2">$120.00</h6>
                        </div>
                    </div>
                    <img
                        src=""
                        alt=""
                        width="100"
                        className="ml-lg-5 order-1 order-lg-2"
                    />
                </div>
            </li>
        </ul>
    );
}

export default Products;
