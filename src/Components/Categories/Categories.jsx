import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import './Categories.css';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Home & Garden",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Sports",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Toys",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Automotive",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Health & Beauty",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      name: "Books",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Music",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 10,
      name: "Movies & TV",
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    }
  ];

  const navigate = useNavigate()
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 4 },
        576: { slidesPerView: 4 },
        768: { slidesPerView: 6 },
        992: { slidesPerView: 8 },
        1200: { slidesPerView: 10 },
      }}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <div
            onClick={() => navigate(`/Categories/${category.id}`)}
            className="d-flex flex-column align-items-center mt-3"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-img"
            />
            <span className="category-title mt-2">{category.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>


  );
};

export default Categories;
