import Categories from "../Components/Categories/Categories"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Offers from "../Components/Offers/Offers";
import Products from "../Components/Proucts/Products";
import { useQuery } from "@tanstack/react-query";
import { fetchBestSellers } from "../api/bestSellers";
import { fetchNewArrivals } from "../api/NewArrivals";
import HeroSection from "../Components/HeroSection/HeroSection";
import PaginatedProducts from "../Components/PaginatedProducts/PaginatedProducts";

const Home = () => {

  const bestSellers = useQuery({
    queryKey: ['bestSellers'],
    queryFn: fetchBestSellers
  })

  const NewArrivals = useQuery({
    queryKey: ['NewArrivals'],
    queryFn: fetchNewArrivals
  })
  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Hero section */}
          <div className="col-lg-12 d-lg-flex d-md-flex col-md-12 bg-white rounded-3">
            <HeroSection />
          </div>

          <div className=" col-lg-12 col-md-12 col-sm-12 bg-white mt-3" >
            <Categories />

            {/* Best Sellers */}
            <div className="mt-4" data-aos="fade-up">
              <h3>Best Sellers</h3>
              <Products products={bestSellers?.data?.data} slider={true} />
            </div>
          </div>

          <div className="container-fluid">
            <div className="border-bottom pb-5">
              <PaginatedProducts />
            </div>
          </div>

          <div>
            <Offers />
          </div>

          {/* New Arrivals */}
          <div className="mt-4 pt-3" data-aos="fade-up">
            <h3>New Arrivals</h3>
            <Products products={NewArrivals?.data?.data} slider={true} />
          </div>


        </div>
      </div>
    </>
  )
}

export default Home