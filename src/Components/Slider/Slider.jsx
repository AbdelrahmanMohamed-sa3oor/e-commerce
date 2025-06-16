import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './Slider.css';

const SliderImage = () => {
    const items = [
        "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
        "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
        "https://cgifurniture.com/blog/wp-content/uploads/2020/06/types-of-cg-product-images-view04.jpg",
        "https://cgifurniture.com/blog/wp-content/uploads/2020/06/types-of-cg-product-images-view04.jpg",
        "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
    ];

    return (
        <div className="">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 } 
                }}
            >
                {items.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`slide-${index}`}
                            className="rounded "
                            style={{
                                width: '100%',
                                height: '480px',
                                objectFit: 'fill',
                                borderRadius: '8px',
                            }}
                        />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
};

export default SliderImage;
