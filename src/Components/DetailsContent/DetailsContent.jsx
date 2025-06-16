import { useState } from 'react';
import AddToCart from '../../Components/AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
const DetailsContent = () => {

  const [ShowDes, setShowDes] = useState(true)
  const [Quantity, setQuantity] = useState(1)


  return (
    <>
      <div className="col-lg-12" >
        <div className='d-flex justify-content-between '>
          <div className="">
            <p className='m-0'>New Collecttion</p>
            <span>Sports</span>
          </div>
          <div className="d-flex  justify-content-center align-items-center">
            <IoMdHeartEmpty className='border d-flex  p-2 rounded-circle justify-content-center align-items-center'
              size={42} />
          </div>
        </div>
        <h2>Product Shell Chair is free and the is very goood place inter the price </h2>
        <span >Color</span>
        <p className='mt-lg-3'>Reviews</p>
        <div className='col-lg-10 d-flex justify-content-between'>
          <div className='d-flex flex-column '>
            <span className='mb-lg-2'>Price</span>
            <small className='fs-5'>$200</small>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium, quisquam obcaecati, molestias eveniet nostrum veritatis praesentium quos necessitatibus sed quidem esse, perferendis natus velit animi accusantium tempore sapiente dignissimos!
              </p> :
              <div className='mt-2'>
                <ul>
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
            <div  style={{ width: '150px' }} >
              <AddToCart />
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default DetailsContent