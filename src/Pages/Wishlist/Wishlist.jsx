import { useDispatch} from 'react-redux';
import { useEffect ,useState } from 'react';
import { GetWishlistThunk } from '../../Redux/Slice/wishlist/getWishlist';
import Products from '../../Components/Proucts/Products';


const Wishlist = () => {
   const dispatch = useDispatch();
   const [Wishlist, setWishlist] = useState()
  
  useEffect(() => {
    const funGetWishlist = async ()=>{
    const {payload} = await dispatch(GetWishlistThunk());
      setWishlist(payload)
    }
    funGetWishlist()
  }, [Wishlist]); 

  return (
    <>
    <Products products={Wishlist}/>
    </>
  )
}

export default Wishlist