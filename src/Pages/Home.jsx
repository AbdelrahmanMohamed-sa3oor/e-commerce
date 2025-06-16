import Categories from "../Components/Categories/Categories"
import SliderImage from "../Components/Slider/Slider"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Offers from "../Components/Offers/Offers";
import Products from "../Components/Proucts/Products";
import imageboks from '../assets/boks.png'

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 2,
      name: "Classic Leather Watch Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 3,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 10,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 11,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 12,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5
    },
    {
      id: 13,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 9,
      name: "Classic Leather Watch",
      price: 79.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "10%",
      reviewsCount: 120,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 2,
      name: "Modern Sunglasses",
      price: 49.99,
      image: "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
      discount: "5%",
      reviewsCount: 85,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 3,
      name: "Stylish Backpack",
      price: 39.99,
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
      discount: "15%",
      reviewsCount: 150,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 4,
      name: "Smart Bluetooth Speaker",
      price: 89.99,
      image: "https://cgifurniture.com/blog/wp-content/uploads/2020/06/types-of-cg-product-images-view04.jpg",
      discount: "20%",
      reviewsCount: 190,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 59.99,
      image: "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
      discount: "10%",
      reviewsCount: 240,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 14,
      name: "Wireless Earbuds",
      price: 59.99,
      image: "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
      discount: "10%",
      reviewsCount: 240,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 15,
      name: "Wireless Earbuds",
      price: 59.99,
      image: "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
      discount: "10%",
      reviewsCount: 240,
      rating: 5,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 16,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 7,
      name: "Desk Lamp",
      price: 22.50,
      image: "https://cgifurniture.com/blog/wp-content/uploads/2020/06/types-of-cg-product-images-view04.jpg",
      discount: "5%",
      reviewsCount: 40,
      rating: 3,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 8,
      name: "Casual Sneakers",
      price: 74.99,
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
      discount: "8%",
      reviewsCount: 98,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 17,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 18,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 19,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 20,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 21,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 22,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 25,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
    {
      id: 24,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
      discount: "7%",
      reviewsCount: 60,
      rating: 4,
      description: 'Discover our premium collection of high-quality products designed to meet your everyday needs with style and efficiency. Each item is carefully selected for durability, functionality,'
    },
  ];

  const ProductsNew = products.slice(0, 12)
  const ProductSlider = products.slice(0, 8);
  const [ShowAllProduct, setShowAllProduct] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-lg-12 d-lg-flex d-md-flex col-md-12 bg-white rounded-3">
            <div className="container-fluid">
              <div className="row d-flex" >
                {/* Left Side - Main Hero */}
                <div className="col-lg-9 col-md-8">
                  <div
                    className="position-relative rounded-4 overflow-hidden  h-100 d-flex flex-column justify-content-center">
                    <SliderImage />
                    <div className="ms-2"
                      style={{ position: 'absolute', zIndex: '100' }}>
                      <h2 className="fw-bold mb-2 p-2">
                        Active Summer With <br />
                        Juice Milk 300ml
                      </h2>
                      <p className="text-muted mb-3 mt-4" style={{ maxWidth: '400px' }}>
                        <span className="bg-white">New arrivals with nature fruits, juice inside, essential for summer</span>
                      </p>
                      <a href="#" className="btn btn-dark my-3 px-5 py-2  ">Shop Now</a>
                    </div>
                  </div>
                </div>
                {/* Right Side - Promo Card */}
                <div className="col-lg-3 d-none d-lg-flex d-md-flex col-md-4">
                  <div
                    className="card border-0 text-start text-white h-100  "
                    style={{ backgroundColor: '#FBC043', maxHeight: '92%', borderRadius: '20px' }}
                  >
                    <div className="d-flex flex-column justify-content-between h-100 p-4 ">
                      <div>
                        <h1 className="fw-bold mt-3 text-dark">20% SALE OFF</h1>
                        <p className="text-dark mt-5 mb-3">Synthetic seeds <br />Net 2.0 OZ</p>
                        <a href="#" className="btn mt-3 btn-light rounded-pill px-4 py-2 fw-semibold">Shop Now</a>
                      </div>
                      <div className="text-end ">
                        <img
                          src={imageboks}
                          alt="Promo Product"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-12 col-md-12 col-sm-12 bg-white mt-3" >
            <Categories />
            <div className="container-fluid">

              <div className="mt-5 d-flex justify-content-between">
                <div className="w-50">
                  <h5 className="card-title">Products</h5>
                  <p className="card-text">
                    {ShowAllProduct ? ` Here you can find a variety of products. ${ProductsNew.length}` :
                    ` show all Product ${products.length}`}
                  </p>
                  
                </div>
                <span onClick={() => {
                  setShowAllProduct(prev => !prev)
                }} className="me-1 text-dark  rounded-pill px-4" >
                  {ShowAllProduct ? (
                    <span className="border p-2 px-4 shadow-sm rounded hover-showAll"
                    style={{cursor:'pointer'}}
                    >Show All</span>
                  ) : (
                    <span className="position-relative d-inline-block">
                      <span className="border p-2 px-3 rounded hover-showAll"
                      style={{cursor:'pointer'}}
                      >Show Less</span>
                      <span
                        className="badge bg-danger position-absolute"
                        style={{
                          top: '-12px',
                          right: '-6px',
                          fontSize: '0.6rem',
                          padding: '4px 6px',
                          borderRadius: '50%',
                        }}
                      >
                        -
                      </span>
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="container-fluid" data-aos="fade-up">
              {
                ShowAllProduct ? <Products products={ProductsNew} /> : <Products products={products} />
              }
            </div>
          </div>
          

          <div>
            <Offers />
          </div>

          <div className="mt-4" data-aos="fade-up">
            <h3>Most Sailing</h3>
            <Products products={ProductSlider} slider={true} />
          </div>

        
        </div>
      </div>
    </>
  )
}

export default Home