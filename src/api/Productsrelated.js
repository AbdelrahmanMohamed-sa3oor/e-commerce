import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const apiKey = import.meta.env.VITE_DOMAIN

export const fetchRelatedProduct = async (id) => {

  try {
    const { data } = await axios.get(`${apiKey}api/products/related/${id}`)
    
    return data
  } catch (error) {
    console.log("error from related fetch",error); 
  }
}

export const useRelatedProduct = (id) => {
  return useQuery({
    queryKey: ['RelatedProducts'],
    queryFn: () => fetchRelatedProduct(id)
  });
};