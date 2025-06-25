import { useState } from 'react';
import AddToCart from '../../Components/AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import AddToWishlist from '../AddToWishlist/AddToWishlist';
const DetailsContent = ({ data }) => {

  const [ShowDes, setShowDes] = useState(true)
  const [Quantity, setQuantity] = useState(1)

  console.log(data);
  


  return (
    <>
      <div className="col-lg-12" >
        <div className='d-flex justify-content-between '>
          <div className="">
            <p className='m-0'>{data?.brand}</p>
            <span>Sports Catogers</span>
          </div>
          <div className="d-flex border px-2  rounded-circle justify-content-center align-items-center">
            <AddToWishlist id={data?._id}/>
          </div>
        </div>
        <h2>{data?.name}</h2>
        <span >Color </span>
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">
          <div className="d-flex align-items-center">
            <p className="mb-0 me-2 fs-6 text-muted">SKU:</p>
            <span className="fw-semibold">{data?.sku}</span>
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0 me-2 fs-6 text-muted">Stock:</p>
            <span className="fw-semibold">{data?.stock}</span>
          </div>
        </div>

        <div className='col-lg-10 d-flex justify-content-between mb-3'>
          <div className='d-flex flex-column '>
            <span className='mb-lg-2'>Price</span>
            <small className='fs-5'>{data?.price}</small>
          </div>
          <div className='d-flex  w-25 text-center flex-column'>
            <span className='mb-lg-2'>Quantity</span>
            <div className='d-flex bg-light p-1 rounded-5 justify-content-between'>
              <small style={{ cursor: 'pointer' }} onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className='bg-white w-25 text-center rounded-circle'
              >-</small>
              <span >{Quantity}</span>
              <small style={{ cursor: 'pointer' }} onClick={() => setQuantity(prev => prev + 1)}
                className='bg-white w-25 text-center rounded-circle'
              >+</small>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-evenly rounded-3 border-bottom mt-lg-2' >

          <Link to="#" onClick={() => setShowDes(!false)}
            className={`text-decoration-none px-3 py-2 ${ShowDes ? 'fw-semibold border-bottom' : ''}  text-muted border-danger`} >
            Description
          </Link>


          <Link to="#" onClick={() => setShowDes(false)}
            className={`text-decoration-none px-3 py-2 ${!ShowDes ? 'fw-semibold border-bottom' : ''}  text-muted border-danger`} >
            Details
          </Link>
        </div>
        <div>
          {
            ShowDes ?
              <p className='pt-lg-2 mt-3'  >
                {data?.description}
              </p> :
              <div className='mt-2'>
                <ul>
                  <li >
                    Ratings {data?.ratings?.count}
                    <span className='ms-1'></span>
                  </li>
                  <li >
                    value :
                    <span className='ms-1'>Lorem ipsum dolor, sit amet consectetur</span>
                  </li>
                  <li >
                    value :
                    <span className='ms-1'>Lorem ipsum dolor, sit amet consectetur</span>
                  </li>
                  <li >
                    value :
                    <span className='ms-1'>Lorem ipsum dolor, sit amet consectetur</span>
                  </li>
                </ul>
              </div>
          }
        </div>

        <div className='d-flex justify-content-between align-items-center'>
          <div className='text-center'>
            <span className='mb-lg-2'>Quantity</span>
            <p className='border rounded-3'>{Quantity}</p>
          </div>
          <div className="d-lg-flex justify-content-center align-items-center">
            <div className='border me-3 d-flex justify-content-center align-items-center text-center p-2 bg-success text-white rounded-3'
              style={{ width: '200px' }}>
              <FaWhatsapp className='me-2' size={20} />
              <span>Order By WhatsApp</span>
            </div>
            <div style={{ width: '150px' }} >
              <AddToCart />
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default DetailsContent