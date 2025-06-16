import React, { useEffect } from 'react'
import OffersImage from '../../assets/offers.jpg'
import OffersImage2 from '../../assets/offers2.jpg'
import offersVideo from '../../assets/videoframe_offers.png'
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Offers = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 }); // مدة الأنيميشن بـ milliseconds
    }, []);
  return (
    <>
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="">
                <h3 className='mt-3 mb-4' data-aos="fade-up">Offers now</h3>
                <div className="col-lg-12 d-lg-flex col-md-12 col-sm-12">
                    <div className="col-lg-6 d-lg-flex col-md-12 col-sm-12" data-aos="fade-up">
                            <div className='w-100 w-sm-100 w-lg-100'> 
                                <img src={offersVideo} alt="" height={400}  className='image-up w-100'/>
                            </div>
                           <div className='d-lg-flex flex-lg-column  d-none'>
                             <img src={OffersImage} width={250} height={200} className='pb-1 ms-1 image-right ' alt="" />
                            <img src={OffersImage2} width={250} height={200} className='ms-1  image-left' alt="" />
                           </div>
                    </div>
                    <div className="col-lg-6 mt-4 m-lg-4 col-md-12 col-sm-12" data-aos="fade-up">
                        <h2>Offers on the occasion of the opening of the new website</h2>
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur <br />
                            adipisicing elit. Mollitia repellendus non officiis, assumenda distinctio amet sequi ullam. Mollitia dolor hic harum numquam sit aperiam odio, exercitationem fuga vel, earum nulla?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus non officiis, assumenda distinctio amet sequi ullam. Mollitia dolor hic harum numquam sit aperiam odio, exercitationem fuga vel, earum nulla?
                        </p>
                        <button className='btn border px-4 text-white mt-5'
                        style={{backgroundColor:'#ED4D2B'}}
                        >Sign in Now</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Offers