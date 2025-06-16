import { LiaCartPlusSolid } from "react-icons/lia";

const AddToCart = ({hover}) => {

    return (
        <>
            <button className={`text-white mb-lg-1 mb-2 border-0 p-1 w-100 ${!hover?'mt-1':''} rounded`}
                style={{ backgroundColor: hover ? 'transparent ':'#ED4D2B'}}
            >
                {
                   hover ? <LiaCartPlusSolid size={32} className="text-dark  pt-1" /> 
                   :<span className="d-flex justify-content-center align-items-center p-1 gap-2">
                    <LiaCartPlusSolid size={22}  />
                    Add to Cart
                </span> 
                }
            </button>
        </>
    )
}

export default AddToCart