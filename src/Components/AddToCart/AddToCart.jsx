import { LiaCartPlusSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartThunk } from "../../Redux/Slice/Cart/AddtoCart";
import toast from "react-hot-toast";
import { getCartThunk } from "../../Redux/Slice/Cart/getcartuser";

const AddToCart = ({ hover, id }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.GetCart.cart?.cartItems);
    
    
    const AddToCart = async () => {
        const isAlreadyInCart = cart?.some(item => item?.prdID?._id === id || item.prdID === id);
        if (isAlreadyInCart) {
            toast.error('the product already added to cart')
        } else {
            const data = await dispatch(AddToCartThunk({
                prdID: id,
                quantity: 1
            }))
            toast.success('done Added To Cart')
            console.log(data);

        }
        dispatch(getCartThunk())
    }
    return (
        <>
            <button className={`text-white mb-lg-1 mb-2 border-0 p-1 w-100 ${!hover ? 'mt-1' : ''} rounded`}
                style={{ backgroundColor: hover ? 'transparent ' : '#ED4D2B' }}
                onClick={AddToCart}>
                {
                    hover ? <LiaCartPlusSolid size={32} className="text-dark  pt-1" />
                        : <span className="d-flex justify-content-center align-items-center p-1 gap-2">
                            <LiaCartPlusSolid size={22} />
                            Add to Cart
                        </span>
                }
            </button>
        </>
    )
}

export default AddToCart