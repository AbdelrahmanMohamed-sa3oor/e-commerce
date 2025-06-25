import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const apiKey = import.meta.env.VITE_DOMAIN

export const getCategoryById = async (id) => {

  try {
    const { data } = await axios.get(`${apiKey}api/categories/${id}`)
    return data
  } catch (error) {
    console.log("error from getCategoryById fetch",error); 
  }
}



export const useGetCategoryById = (id) => {
  return useQuery({
    queryKey: ['category', id], 
    queryFn: ()=> getCategoryById(id),
    enabled: !!id 
  });
};