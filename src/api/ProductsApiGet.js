import axios from "axios"
const apiKey = import.meta.env.VITE_DOMAIN

export const fetchProducts = async ()=>{

  try {
    const { data } = await axios.get(`${apiKey}api/products`)
    return data
  } catch (error) {
    console.log("error from Products fetch",error); 
  }
}

