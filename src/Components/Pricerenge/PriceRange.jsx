import React, { useState } from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setFilter } from '../../Redux/Slice/SearchProduct/SearchProduct';

const PriceRange = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);
  const dispatch = useDispatch();
  const Filter = useSelector((state)=>state.Filter)

  const handleMinChange = (value) => {
    const newMin = Number(value);
    setMinPrice(newMin);

    if (newMin === 0) {
      dispatch(resetFilters());
    } else {
      dispatch(setFilter({ minPrice: newMin }));
    }
  };

  const handleMaxChange = (value) => {
    const newMax = Number(value);
    setMaxPrice(newMax);

    if (newMax === 0) {
      dispatch(resetFilters());
    } else {
      dispatch(setFilter({ maxPrice: newMax }));
    }
  };

  return (
    <div className='container'>
      <div className="mt-3 border-top pt-4">
        <span className='text-secondary'>Price Range</span>

        {/* Two inputs for minPrice and maxPrice */}
        <div className="mt-4 d-flex gap-3">
          <div className="w-50">
            <label className="text-muted">Min Price</label>
            <input
              type="number"
              min={0}
              max={maxPrice}
              value={minPrice}
              onChange={(e) => handleMinChange(e.target.value)}
              className='border-0 shadow-sm rounded-3 text-center w-100 p-2'
            />
          </div>
          <div className="w-50">
            <label className="text-muted">Max Price</label>
            <input
              type="number"
              min={minPrice}
              max={10000}
              value={maxPrice}
              placeholder='100000000'
              onChange={(e) => handleMaxChange(e.target.value)}
              className='border-0 shadow-sm rounded-3 text-center w-100 p-2'
            />
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div className="mt-5">
            <span className='text-muted pb-5'>select Search</span>
          <select
            className="form-select mt-3"
            onChange={(e) => dispatch(setFilter({ sort: e.target.value }))}
            defaultValue="-createdAt"
          >
            <option value="-createdAt">Newest</option>
            <option value="createdAt">Oldest</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
            <option value="-ratings.average">Top Rated</option>
            <option value="ratings.average">Lowest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
