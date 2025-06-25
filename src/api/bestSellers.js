import axios from "axios"
const apiKey = import.meta.env.VITE_DOMAIN

export const fetchBestSellers = async ()=>{

  try {
    const { data } = await axios.get(`${apiKey}api/products/best-sellers`)
    
    return data
  } catch (error) {
    console.log("error from BestSellers fetch",error); 
  }
}