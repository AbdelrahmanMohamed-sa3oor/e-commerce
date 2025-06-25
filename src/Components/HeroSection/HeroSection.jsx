import imageBok from '../../assets/boks.png'
import SliderImage from '../Slider/Slider'

const HeroSection = () => {
  return <>
    
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
                          src={imageBok}
                          alt="Promo Product"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


    </>

}

export default HeroSection