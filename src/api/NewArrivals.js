import axios from "axios"
const apiKey = import.meta.env.VITE_DOMAIN

export const fetchNewArrivals = async ()=>{

  try {
    const { data } = await axios.get(`${apiKey}api/products/new-arrivals`)

    
    return data
  } catch (error) {
    console.log("error from new-arrivals fetch",error); 
  }
}