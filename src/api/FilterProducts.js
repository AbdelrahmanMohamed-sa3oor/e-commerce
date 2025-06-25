import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export const FilterProduct = async (page) => {
    const apiKey = import.meta.env.VITE_DOMAIN
    try {
        const {data} = await axios.get(`${apiKey}api/products/filter?page=${page}&limit=12`)
        console.log(data.data);
        return data
    } catch (error) {
        console.log("error fetch Filter",error);
    }

}

export const usePaginatedProducts = (page) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: () => FilterProduct(page),
    keepPreviousData: true
  });
};