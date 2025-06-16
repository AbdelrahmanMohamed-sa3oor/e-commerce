import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Proucts/Products'
import Sidebar from '../../Components/Sidebar/Sidebar'

const CategoriesPage = () => {
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

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className='col-lg-12 d-lg-flex '>
                 <div className="col-lg-3">
                    <Sidebar/>
                </div>
                <div className="col-lg-9">
                        <Categories/>

                        <div className="mt-4 ">
                            <div className="d-lg-flex justify-content-between">
                                <span>find the Categories number {products.length}</span>
                            </div>
                            <Products products={products} Categories={true}/>
                        </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default CategoriesPage