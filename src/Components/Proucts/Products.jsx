import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import '../../App.css';
import AddToCart from "../AddToCart/AddToCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ products, slider = false,Categories }) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const navigate = useNavigate()
  const renderCard = (src, index) => (
    <div key={index} className="shadow-sm rounded-4 bg-white product-card"
      style={{
        position: "relative", overflow: "hidden",
        zIndex: hoveredCardIndex === index ? 20 : 1,
        cursor:'pointer', transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hoveredCardIndex === index ? "translateY(-9px)" : "none",
        boxShadow: hoveredCardIndex === index ? "0px 4px 40px rgba(0,0,0,0.15)" : "none"
      }}
      onMouseOver={() => setHoveredCardIndex(index)}
      onMouseOut={() => setHoveredCardIndex(null)}
      onClick={()=>navigate(`/details/${src.id}`)}
    >
      {/* Product Image */}
      <img src={src.image} className="card-img-top rounded-top product-img"
        width={300} height={160} alt={`Product ${index + 1}`}
      />

      {/* Wishlist + AddToCart */}
      <div
        style={{
          position: "absolute",
          top: "4px",
          right: "6px",
          zIndex: 10,
          gap: "8px",
          opacity: hoveredCardIndex === index ? 1 : 0,
          transition: "opacity 0.3s ease-in-out"
        }}
        className="pt-1 mt-1 ps-3 justify-content-between"
      >
        {/* Add to Cart Button */}
       
         <div title="اضافة المنتج" className="bg-light text-dark rounded-circle shadow-sm">
           <AddToCart hover={true} />

         </div>

        {/* Heart Icon */}
        
          <div className="bg-light ps-1 mt-1 px-1 py-1 text-dark rounded-circle shadow-sm">
          <IoMdHeartEmpty size={28} color="black" className="mt-1 ps-1" style={{cursor:'pointer'}}/>
         </div>

      </div>
      

      {/* Product Content */}
      <div className="m-1 pt-1 m-lg-2 mb-lg-1">
        <h6 className="product-title m-0 m-lg-1">{src.name}</h6>
        <div className="my-lg-2 d-flex align-items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} color={i < src.rating ? "#ffc107" : "#e4e5e9"} />
          ))}
          <span className="ms-2" style={{ fontSize: "15px" }}>
            {src.reviewsCount} Reviews
          </span>
        </div>

        <div className="ellipsis-multiline mb-2">
          <p>{src.description}</p>
        </div>

        <div className="d-flex m-lg-1 pb-2 justify-content-between align-items-center">
          <p className="p-0 m-0 ">${src.price}</p>
          <span className="bg-light p-1 rounded">{src.discount}</span>
        </div>
       
      </div>
    </div>
  );

  return (
    <div className="mt-3 pt-2 mb-3 pb-3">
      {slider ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 5 },
          }}
        >
          {products.map((src, index) => (
            <SwiperSlide key={index}>
              {renderCard(src, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="row">
          {products.map((src, index) => (
            <div key={index} 
             className={`col-6 ${Categories ?'col-lg-3':'col-lg-2'} p-2 col-md-4 col-sm-6 mb-3`}>
              {renderCard(src, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
