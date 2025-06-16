import React from 'react'

const Ranking = () => {
  return (
    <>
    <div className='container'>
        <span className='text-secondary m-2'>latest</span>
        <div>

        <button className='btn text-white rounded-4 mt-2 m-1'
        style={{backgroundColor:'#ED4D2B'}}
        >new Product</button>

        <button className='btn text-white rounded-4 mt-2 m-1'
        style={{backgroundColor:'#ED4D2B'}}
        >best seller</button>

        <button className='btn text-white rounded-4 mt-2 m-1'
        style={{backgroundColor:'#ED4D2B'}}
        >max rating</button>

        <button className='btn text-white rounded-4 mt-2 m-1'
        style={{backgroundColor:'#ED4D2B'}}
        >Price min to max</button>

        <button className='btn text-white rounded-4 mt-2 m-1'
        style={{backgroundColor:'#ED4D2B'}}
        >Price max to min</button>
        </div>
    </div>
    </>
  )
}

export default Ranking