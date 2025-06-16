import React from 'react'
import '../../App.css'
const PriceRange = () => {
  return (
<div className='container'>
            <div className="mt-3 border-top pt-4">
                <span className='text-secondary'>Price Range</span>
                <input type="range" name="" id="" 
                className='d-block w-100 custom-range mt-3'/>
                <div className="d-flex justify-content-between mt-2">  
                    <div className='d-flex flex-column text-center'>
                        <small className='text-secondary'>min</small>  
                    <input type="text" style={{width:'45px'}}  className=' border-0 shadow-sm rounded-3' />
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <small className='text-secondary'>max</small>  
                     <input type="text" style={{width:'45px'}}  className='border-0 shadow-sm rounded-3' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PriceRange