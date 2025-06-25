import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetWishlistThunk } from '../../Redux/Slice/wishlist/getWishlist';
import { getCartThunk } from '../../Redux/Slice/Cart/getcartuser';


const Layout = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(GetWishlistThunk());
      dispatch(getCartThunk())
    }
  }, [token]); 



  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout