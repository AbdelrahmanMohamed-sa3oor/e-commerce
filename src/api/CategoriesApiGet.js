import axios from 'axios'

const apiKey = import.meta.env.VITE_DOMAIN

export const fetchCategories = async () => {
  const token = localStorage.getItem("token")
  try {
    const { data } = await axios.get(`${apiKey}api/categories`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    
    return data.categories
  } catch (error) {
    console.log("error fetch from Categories",error);
    
  }
}
