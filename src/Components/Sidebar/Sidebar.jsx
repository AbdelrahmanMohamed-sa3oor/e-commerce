
import SearchName from '../SearchName/SearchName'
import '../../App.css'
import FindReviews from '../FindReviews/FindReviews'
import FindStock from '../FindStock/FindStock'
import { useEffect, useState } from 'react'
import { FaSortAmountDown } from "react-icons/fa";
import PriceRange from '../Pricerenge/PriceRange'
import ModelMobile from '../ModelMobile/ModelMobile'
import Ranking from '../Ranking/Ranking'

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);


  const [Models, setModel] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968);

    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handelShow = () => {
    setModel(true)
  }
  
  return (
    <>
      {
        isMobile ?
          <div className='col-12' >
            <div className='container' style={{ position: 'relative' }}>
              <FaSortAmountDown onClick={handelShow} 
                style={{ position: 'absolute', top: "360px", right: '10px', zIndex: 100 }} />
            </div>
          </div>
          :
          <div className='col-lg-12 col-md-12 col-sm-12 vh-75 '>
            <SearchName />
            <Ranking/>
            <PriceRange />

            <div className='mt-4'>
              <FindReviews />
            </div>
            <div className="mt-4">
              <FindStock />
            </div>

          </div>
      }


      {Models && <ModelMobile setModel={setModel} Models={Models} />}
    </>
  )
}

export default Sidebar