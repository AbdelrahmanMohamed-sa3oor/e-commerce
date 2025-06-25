import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getProductsByCategory = async (id) => {
    const apiKey = import.meta.env.VITE_DOMAIN

 try {
   const { data } = await axios.get(`${apiKey}api/products/category/${id}`);
   console.log(data);
   
  return data;
 } catch (error) {
  console.log(error);
 }
};

export const useProductsByCategory = (id) => {
  return useQuery({
    queryKey: ['products-category', id],
    queryFn: () => getProductsByCategory(id),
  });
};