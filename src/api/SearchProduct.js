import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiKey = import.meta.env.VITE_DOMAIN;

export const fetchFilteredProducts = async (filters) => {
  const query = new URLSearchParams();

  if (filters.search) query.append('search', filters.search);
  if (filters.category) query.append('category', filters.category);
  if (filters.minPrice) query.append('minPrice', filters.minPrice);
  if (filters.maxPrice) query.append('maxPrice', filters.maxPrice);
  if (filters.sort) query.append('sort', filters.sort);

  const { data } = await axios.get(`${apiKey}api/products/filter?${query.toString()}`);
  return data.data; 
};

export const useFilteredProducts = (filters) => {
  return useQuery({
    queryKey: ['filtered-products', filters],
    queryFn: () => fetchFilteredProducts(filters),
    enabled: !!filters, // متشتغلش غير لما يكون في فلتر
  });
};
