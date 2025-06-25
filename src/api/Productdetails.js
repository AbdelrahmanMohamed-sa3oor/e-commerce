import axios from "axios"
const apiKey = import.meta.env.VITE_DOMAIN

export const fetchProductDetails = async (id)=>{
  try {
    const { data } = await axios.get(`${apiKey}api/products/${id}`)
    
    return data
  } catch (error) {
    console.log("error from ProductDetails fetch",error); 
  }
}