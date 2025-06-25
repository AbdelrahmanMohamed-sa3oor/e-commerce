import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAllCardThunk, removeCardItemThunk } from '../../Redux/Slice/Cart/remove';
import { getCartThunk } from '../../Redux/Slice/Cart/getcartuser';
import toast from 'react-hot-toast';

const SidebarCanvas = () => {
  const cart = useSelector(state => state.GetCart.cart?.cartItems);
  const cartId = useSelector(state => state.GetCart.cart);
  const Dispatch = useDispatch()

  
  const navigate = useNavigate();
  const removeProduct = async (itemId)=>{
   const {payload} = await Dispatch(removeCardItemThunk({itemId}))
   if (payload?.message === 'Item removed successfully') {
      toast.success('item to Remove done')
      Dispatch(getCartThunk())
   }
  }
  const removeAllCard =async () =>{
    
    const {payload} = await Dispatch(removeAllCardThunk({itemId:cartId?._id}))
    if (payload?.message === 'Cart deleted successfully') {
      toast.success(payload?.message)
      Dispatch(getCartThunk())
    }
  }
  

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="mainSidebar"
      aria-labelledby="mainSidebarLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title fw-bold w-50" id="mainSidebarLabel">Cart</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        
      </div>
      <div className="text-end">
        <button className='w-50 btn border rounded-5 m-2'
        onClick={()=>removeAllCard()}
        >delete All Cart</button>
      </div>
      <div className="offcanvas-body">
        {cart?.length > 0 ? cart.map((item, index) => (
          <div key={index} className="d-flex flex-column border-bottom pb-3 mb-3">
            <div
              className="d-flex align-items-center gap-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => navigate(`details/${item?.prdID?.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={item?.prdID?.images[0]?.url}
                width={60}
                height={60}
                alt={item?.prdID?.name}
                style={{ objectFit: 'cover', borderRadius: 8 }}
              />
              <div className="flex-grow-1">
                <div className="fw-bold">{item?.prdID?.name}</div>
                <div className="text-muted small">${item?.prdID?.price}</div>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2 px-1">
              <div className="d-flex align-items-center gap-1">
                <span className="small text-muted">Qty:</span>
                <span className="fw-bold">{item?.quantity}</span>
              </div>
              <button className="btn btn-link text-danger p-0">
                <FaTrashAlt size={18} onClick={()=>removeProduct(item?._id)}/>
              </button>
            </div>
          </div>
        )) : (
          <p className="text-center text-muted">Cart is empty</p>
        )}

        <div className="mt-4">
            <button
            className="btn text-white w-100 mb-2"
            disabled={cart?.length===0}
            onClick={() => {
              navigate('/ShoppingCart')
            
            }}
            style={{ backgroundColor: '#ED4D2B' }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Proceed to checkout
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="btn btn-outline-secondary w-100"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarCanvas;
