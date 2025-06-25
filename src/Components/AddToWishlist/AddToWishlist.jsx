import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AddToWishlistThunk } from '../../Redux/Slice/wishlist/wishlist';
import { RemoveWishlistThunk } from '../../Redux/Slice/wishlist/removeWishlist';
import { GetWishlistThunk } from '../../Redux/Slice/wishlist/getWishlist';
import toast from 'react-hot-toast';

const AddToWishlist = ({ id }) => {
  const dispatch = useDispatch();

  // جاي من GetWishlistThunk
  const wishlist = useSelector(state => state.GetWishlist.GetWishlist); 

  // اتأكد إنه موجود في الويشليست ولا لأ
  const isInWishlist = wishlist?.some(item => item._id === id);

  const toggleWishlist = async () => {
    if (isInWishlist) {
        toast.error('Done To Remove Wishlist')
      await dispatch(RemoveWishlistThunk(id));
    } else {
      await dispatch(AddToWishlistThunk(id));
    }
    dispatch(GetWishlistThunk());
    toast.success('Done To Add Wishlist')
  };

  return (
    <>
      {isInWishlist ? (
        <IoMdHeart
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist();
          }}
          size={30}
          color="red"
          className="mt-1 ps-1"
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <IoMdHeartEmpty
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist();
          }}
          size={30}
          color="black"
          className="mt-1 ps-1"
          style={{ cursor: 'pointer' }}
        />
      )}
    </>
  );
};

export default AddToWishlist;
