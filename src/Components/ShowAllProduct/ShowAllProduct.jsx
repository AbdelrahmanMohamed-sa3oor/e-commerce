import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchProducts } from '../../api/ProductsApiGet';
import Products from '../Proucts/Products';

const ShowAllProduct = () => {
    const { data,isLoading} = useQuery({
        queryKey: ['Products'],
        queryFn: fetchProducts,
    }
    );

    if(isLoading){
        return <span>loading.....</span>
    }
   
    return (
        <>
            <div className="container-fluid">
            <h3>ShowAllProduct</h3>
                <Products products={data?.products}/>
            </div>
        </>
    )
}

export default ShowAllProduct