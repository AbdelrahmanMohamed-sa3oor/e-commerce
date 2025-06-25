import { useState } from "react";
import { setFilter } from "../../Redux/Slice/SearchProduct/SearchProduct";
import { useDispatch } from "react-redux";

const FindStock = () => {
  const [stockStatus, setStockStatus] = useState('');
  const dispatch = useDispatch();

  console.log("Selected stock status:", stockStatus);

  const Stockfun = (e) => {
    const value = e.target.value;
  setStockStatus(value);
  dispatch(setFilter({ inStock: value }));
  }
  

  return (
    <div className="container mt-2">
      <span className="text-secondary">Condition</span>
      <ul className="list-unstyled mt-2 m-2">
        <li>
          <input
            type="radio"
            name="stock"
            value='true'
            onChange={(e) => Stockfun(e)}
            className="me-2"
          />
          In Stock
        </li>
        <li>
          <input
            type="radio"
            name="stock"
            value='false'
            onChange={(e) => Stockfun(e)}
            className="me-2"
          />
          Out of Stock
        </li>
      </ul>
    </div>
  );
};

export default FindStock;
