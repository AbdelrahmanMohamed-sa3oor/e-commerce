import { useEffect } from 'react';
import DetailsContent from '../../Components/DetailsContent/DetailsContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReviewsDetails from '../../Components/ReviewsDetails/ReviewsDetails';
import Products from '../../Components/Proucts/Products';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import '../../App.css'
import { useQuery } from "@tanstack/react-query";
import { fetchProductDetails } from '../../api/Productdetails';
import { BounceLoader } from 'react-spinners';
import { useRelatedProduct } from '../../api/Productsrelated';

const Details = () => {

    const {id} = useParams();

    const {data ,isLoading} = 
    useQuery({queryKey: ['bestSellers'],queryFn: ()=>fetchProductDetails(id)})

    console.log(data);

    const {data:RelatedProduct } = useRelatedProduct(id)

    console.log(RelatedProduct?.data);
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <BounceLoader
                color="#e6c61f"
                size={120}
            />
        </div>
    }
    

    return (
        <div className="container my-4 ">
            <div className="row" >
                {/* العمود الأيسر للصور */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0" >
                    <div className="d-flex flex-column flex-lg-row-reverse gap-3">
                        {/* الصورة الرئيسية */}
                        <div className="w-100">
                            <img
                                src={data?.imageCover}
                                className="img-fluid rounded w-100"
                                alt="Main"
                            />
                        </div>
                        {/* الصور المصغرة على الشمال */}
                        <div
                            className="d-flex flex-lg-column flex-row flex-wrap justify-content-center align-items-center gap-2"
                            style={{ minWidth: '110px' }}
                        >
                            {
                                data?.images?.map((img,ind)=>(
                                    <img key={ind} src={img?.url} width={100} height={90} className="rounded" alt="thumb1" />
                                ))
                            }
                            
                        </div>
                    </div>
                </div>

                {/* العمود الأيمن لتفاصيل المنتج */}
                <div className="col-12 col-lg-5 m-lg-2 d-lg-flex justify-content-center">
                    <DetailsContent data={data}/>
                </div>

                <div className="col-lg-12 mt-4">
                    <Accordion defaultActiveKey={['0']} alwaysOpen className="custom-accordion">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header >More Description </Accordion.Header>
                            <Accordion.Body>
                                {data?.description}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="col-lg-12 mt-4">
                    <Accordion defaultActiveKey={['0']} alwaysOpen className="custom-accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Reviews Details </Accordion.Header>
                            <Accordion.Body>      
                                {/* كموبنينت الرفيو */}
                                <ReviewsDetails data={data}/> 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className='mt-4'>
                    <h3>Similar Products</h3>
                    {
                        RelatedProduct?.data.length === 0 ? <div className='text-center'>No Product Related....</div> :
                        <Products products={RelatedProduct?.data} slider={true} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;
