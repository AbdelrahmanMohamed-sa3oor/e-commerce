import 'bootstrap/dist/css/bootstrap.min.css';

const ShoppingCart = () => {
  const items = [
    {
      id: 1,
      name: 'Fresh Oranges',
      weight: '500 g',
      price: 11.75,
      qty: 4,
      subtotal: 47.0,
      image: 'https://img.icons8.com/emoji/48/onion-emoji.png',
    },
    {
      id: 2,
      name: 'Red Onion',
      weight: '500 g',
      price: 8.0,
      qty: 2,
      subtotal: 16.0,
      image: 'https://img.icons8.com/emoji/48/onion-emoji.png',
    },
    {
      id: 3,
      name: 'Fresh Yellow Lemon',
      weight: '1 Kg',
      price: 8.0,
      qty: 1,
      subtotal: 8.0,
      image: 'https://img.icons8.com/emoji/48/onion-emoji.png',
    },
    {
      id: 4,
      name: 'Pomegranate',
      weight: '500 g',
      price: 7.2,
      qty: 2,
      subtotal: 14.4,
      image: 'https://img.icons8.com/emoji/48/onion-emoji.png',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-sm-12">
          <div className="table-responsive">
            <table className="table col-12">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-danger me-2">&times;</button>
                        <img src={item.image} alt={item.name} width="48" height="48" className="me-2" />
                        <div>
                          <div>{item.name}</div>
                          <small className="text-muted">{item.weight}</small>
                        </div>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center rounded ">
                        <div className="border rounded-2">
                            <button className="btn border-end">-</button>
                        <span className="mx-3">{item.qty}</span>
                        <button className="btn border-start">+</button>
                        </div>
                      </div>
                    </td>
                    <td>${item.subtotal.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="border rounded p-4 shadow-sm">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between">
                <span>Items</span>
                <span>9</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Sub Total</span>
                <span>$85.40</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Taxes</span>
                <span>$0.00</span>
              </li>
              <li className="d-flex justify-content-between text-danger">
                <span>Coupon Discount</span>
                <span>-$10.00</span>
              </li>
              <li className="d-flex justify-content-between fw-bold border-top pt-2">
                <span>Total</span>
                <span>$74.40</span>
              </li>
            </ul>
            <button className="btn btn-success w-100 mt-3">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
