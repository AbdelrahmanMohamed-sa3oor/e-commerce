import { useEffect } from 'react';
import images from '../../assets/offers.jpg';
import DetailsContent from '../../Components/DetailsContent/DetailsContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReviewsDetails from '../../Components/ReviewsDetails/ReviewsDetails';
import Products from '../../Components/Proucts/Products';
// import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import '../../App.css'
const Details = () => {
    const products = [
        {
            id: 1,
            name: "Classic Leather Watch",
            price: 79.99,
            image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
            discount: "10%",
            reviewsCount: 120,
            rating: 5
        },
        {
            id: 2,
            name: "Modern Sunglasses",
            price: 49.99,
            image: "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
            discount: "5%",
            reviewsCount: 85,
            rating: 4
        },
        {
            id: 3,
            name: "Stylish Backpack",
            price: 39.99,
            image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
            discount: "15%",
            reviewsCount: 150,
            rating: 4
        },
        {
            id: 4,
            name: "Smart Bluetooth Speaker",
            price: 89.99,
            image: "https://cgifurniture.com/blog/wp-content/uploads/2020/06/types-of-cg-product-images-view04.jpg",
            discount: "20%",
            reviewsCount: 190,
            rating: 5
        },
        {
            id: 5,
            name: "Wireless Earbuds",
            price: 59.99,
            image: "https://www.hi.edu/wp-content/uploads/2024/04/35b469_91ab9fea64b844b5be299f107840ed15_mv2.webp",
            discount: "10%",
            reviewsCount: 240,
            rating: 5
        },
        {
            id: 6,
            name: "Gaming Mouse",
            price: 29.99,
            image: "https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg",
            discount: "7%",
            reviewsCount: 60,
            rating: 4
        },
        {
            id: 7,
            name: "Desk Lamp",
            price: 22.50,
            image: "https://cgifurniture.com/blog/wp-content/uploads/2020/06/types-of-cg-product-images-view04.jpg",
            discount: "5%",
            reviewsCount: 40,
            rating: 3
        },
        {
            id: 8,
            name: "Casual Sneakers",
            price: 74.99,
            image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
            discount: "8%",
            reviewsCount: 98,
            rating: 4
        },
    ];

    // const {id} = useParams();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="container my-4 ">
            <div className="row" >
                {/* العمود الأيسر للصور */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0" >
                    <div className="d-flex flex-column flex-lg-row-reverse gap-3">
                        {/* الصورة الرئيسية */}
                        <div className="w-100">
                            <img
                                src={images}
                                className="img-fluid rounded w-100"
                                alt="Main"
                            />
                        </div>
                        {/* الصور المصغرة على الشمال */}
                        <div
                            className="d-flex flex-lg-column flex-row flex-wrap justify-content-center align-items-center gap-2"
                            style={{ minWidth: '110px' }}
                        >
                            <img src={images} width={100} height={90} className="rounded" alt="thumb1" />
                            <img src={images} width={100} height={90} className="rounded" alt="thumb2" />
                            <img src={images} width={100} height={90} className="rounded" alt="thumb3" />
                            <img src={images} width={100} height={90} className="rounded" alt="thumb4" />
                            <img src={images} width={100} height={90} className="rounded" alt="thumb4" />
                        </div>
                    </div>
                </div>

                {/* العمود الأيمن لتفاصيل المنتج */}
                <div className="col-12 col-lg-5 m-lg-2 d-lg-flex justify-content-center">
                    <DetailsContent />
                </div>

                <div className="col-lg-12 mt-4">
                    <Accordion defaultActiveKey={['0']} alwaysOpen className="custom-accordion">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header >More Description </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="col-lg-12 mt-4">
                    <Accordion defaultActiveKey={['0']} alwaysOpen className="custom-accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Reviews Details </Accordion.Header>
                            <Accordion.Body>
                                
                    <ReviewsDetails />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className='mt-4'>
                    <h3>Similar Products</h3>

                    <Products products={products} slider={true} />
                </div>

            </div>
        </div>
    );
};

export default Details;
