import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantityThunk } from '../../Redux/Slice/Cart/updateQuantity';
import { getCartThunk } from '../../Redux/Slice/Cart/getcartuser';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.GetCart.cart);
  const cartItem = useSelector(state => state.GetCart.cart?.cartItems) || [];

  console.log(cartItem);

  const handleUpdateQuantity = (prdID, newQuantity) => {
    dispatch(updateQuantityThunk({ prdID, quantity: newQuantity }));
    dispatch(getCartThunk())
  };


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
                {cartItem?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-danger me-2">&times;</button>
                        <img src={item.prdID?.images?.find(img => img.isPrimary)?.url || item.prdID?.images?.[0]?.url} alt={item.prdID?.name} width={48} height={48} />
                        <div>
                          <div>{item?.prdID?.name}</div>
                          <small className="text-muted">{ }</small>
                        </div>
                      </div>
                    </td>
                    <td>${item?.prdID?.price}</td>
                    <td>
                      <div className="d-flex align-items-center rounded ">
                        <div className="border rounded-2">
                          <button onClick={() => handleUpdateQuantity(item?.prdID?.id, item?.quantity - 1)}>-</button>
                          <span className="mx-3">{item?.quantity}</span>
                          <button
                           onClick={() => handleUpdateQuantity(item?.prdID?.id, item?.quantity + 1)}>+</button>
                        </div>
                      </div>
                    </td>
                    <td>${ }</td>
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
                <span>{cart?.total}</span>
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
