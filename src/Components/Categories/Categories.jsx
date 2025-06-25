import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import './Categories.css';  
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../../api/CategoriesApiGet';
import HistoriesLoader from '../../Loader/HistoriesLoader';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/Slice/SearchProduct/SearchProduct';
const Categories = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['Categories'],
    queryFn: fetchCategories
  });
  
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const CategoriesProducts = (id)=>{
    dispatch(setFilter({category:id}))
    navigate(`/Categories/${id}`)
  }
  
  if (isLoading) {
    return <HistoriesLoader/>
  }

  if (isError) {
    return <div>
      <span className='text-danger text-center'>An error occurred on the server. Please try again later Categories.</span>
    </div>
    
  }

  
  return (
    <>
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
      {data?.map((category, index) => (
        <SwiperSlide key={index}>
          <div
            className="d-flex flex-column align-items-center mt-3 "
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex flex-column align-items-center p-3"
            onClick={()=>CategoriesProducts(category?._id)}
            >
              <img
              src={category?.image}
              alt={category?.name}
              className="category-img"
            />
            <span className="category-title mt-2">{category?.name}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
</>

  );
};

export default Categories;
