import { useNavigate } from "react-router-dom";

const CartProducts = () => {
    const navigate = useNavigate()
  return (
    <div className="container py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">My Cart</h2>
        <button onClick={()=>navigate('/ShoppingCart')}
         className="btn btn-outline-secondary rounded-pill px-3">
          <i className="bi bi-arrow-left"></i> Continue shopping
        </button>
      </div>

      <div className="table-responsive">
        <div className="d-none d-md-flex fw-bold text-uppercase text-muted small border-top py-2">
          <div className="col-md-2 text-center">Product</div>
          <div className="col-md-4">Details</div>
          <div className="col-md-2 text-center">Price</div>
          <div className="col-md-2 text-center">Qty</div>
          <div className="col-md-2 text-center">Total</div>
        </div>

        {/* Product Row 1 */}
        <div className="row g-0 border-top border-bottom py-3 align-items-center">
          <div className="col-4 col-md-2 text-center">
            <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Xiaomi 365" />
          </div>
          <div className="col-8 col-md-4 mt-2 mt-md-0">
            <div className="fw-bold">Xiaomi 365</div>
            <div className="text-muted small">#21433254354532</div>
            <div className="text-muted small">Color: White // <strong>Extra:</strong> Sport Tire + Battery High 100</div>
          </div>
          <div className="col-6 col-md-2 text-center mt-3 mt-md-0">
            <div className="text-muted small">+ 50.99€ Sport Tire</div>
            <div className="text-muted small">+ 35€ Battery High</div>
            <div className="fw-semibold">484.99€</div>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <button className="btn btn-light border">-</button>
            <span className="mx-2">1</span>
            <button className="btn btn-light border">+</button>
          </div>
          <div className="col-12 col-md-2 text-center fw-semibold mt-3 mt-md-0">484.99€</div>
        </div>

        {/* Product Row 2 */}
        <div className="row g-0 border-bottom py-3 align-items-center">
          <div className="col-4 col-md-2 text-center">
            <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Ninebot ES2" />
          </div>
          <div className="col-8 col-md-4 mt-2 mt-md-0">
            <div className="fw-bold">Ninebot ES2</div>
            <div className="text-muted small">#21432353246353</div>
            <div className="text-muted small">Color: Black // <strong>Extra:</strong> Full Tire</div>
          </div>
          <div className="col-6 col-md-2 text-center mt-3 mt-md-0">
            <div className="text-muted small">+ 80.99€ Full Tire</div>
            <div className="fw-semibold">489.99€</div>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <button className="btn btn-light border">-</button>
            <span className="mx-2">3</span>
            <button className="btn btn-light border">+</button>
          </div>
          <div className="col-12 col-md-2 text-center fw-semibold mt-3 mt-md-0">1469.97€</div>
        </div>
      </div>

      {/* Shipping and Summary */}
      <div className="bg-light p-4 rounded-4 shadow-sm mt-5">
        <h5 className="fw-bold mb-3">Choose shipping mode:</h5>

        <div className="form-check mb-3">
          <input className="form-check-input" type="radio" name="shipping" id="pickup" defaultChecked />
          <label className="form-check-label" htmlFor="pickup">
            <span className="fw-bold">Store pickup (In 20 min)</span> – <span className="text-success">FREE</span>
          </label>
        </div>

        <div className="form-check mb-4">
          <input className="form-check-input" type="radio" name="shipping" id="delivery" />
          <label className="form-check-label" htmlFor="delivery">
            <span className="fw-bold">Delivery at home (Under 2 - 4 day)</span> – 9.90€ <br />
            <span className="text-muted small">At 45 Glenridge Ave. Brooklyn, NY 11220</span>
          </label>
        </div>

        <div className="row mt-4">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">SUBTOTAL TTC</span>
                <span>1954.97€</span>
              </li>
              <li className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">SHIPPING</span>
                <span className="text-success">Free</span>
              </li>
              <li className="d-flex justify-content-between fs-5 border-top pt-3">
                <span className="fw-bold">TOTAL</span>
                <span className="fw-bold">1954.97€</span>
              </li>
            </ul>
            <button className="btn btn-danger w-100 mt-3 fs-5 py-2 rounded-pill">
              Checkout &nbsp; 1954.97 €
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
