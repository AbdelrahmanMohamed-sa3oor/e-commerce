
import { useState } from "react";
import Products from "../Proucts/Products"
import { usePaginatedProducts } from "../../api/FilterProducts";
import { BounceLoader } from 'react-spinners';

const PaginatedProducts = () => {

    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = usePaginatedProducts(page);

    const handelFun = (num) => {
        setPage(num)
    }



    if (isLoading) {

        return <div className=" d-flex justify-content-center">
            <BounceLoader
                color="#e6c61f"
                size={120}
            />
        </div>
    }


    if (isError) return <p>خطأ: {error.message}</p>;


    return (
        <>
            <h4>All Product</h4>
            <p>Explore our full range of carefully selected products to suit every need and lifestyle.
                Quality meets affordability – find what you love today!</p>
            <Products products={data?.data} />
            <div>
                <div className="text-center">
                    {[...Array(data?.totalPages)].map((_, index) => (
                        <span
                            key={index}
                            className={`p-1 px-3 border mx-1 rounded-circle ${page === index + 1 ? 'bg-dark text-white' : 'bg-light'}`}
                            onClick={() => handelFun(index + 1)}
                            style={{ cursor: 'pointer' }}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PaginatedProducts