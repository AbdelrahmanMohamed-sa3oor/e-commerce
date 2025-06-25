import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../Redux/Slice/SearchProduct/SearchProduct";
import { useFilteredProducts } from "../../api/SearchProduct";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { HiOutlineShoppingBag } from "react-icons/hi";

const SearchName = ({pages}) => {
    const dispatch = useDispatch();
    const Filter = useSelector((state) => state.Filter);
    const { data } = useFilteredProducts(Filter);
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const wrapperRef = useRef(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setShowDropdown(true);
        dispatch(setFilter({ search: value }));
    };

    const handleSelectProduct = (productId) => {
        navigate(`/details/${productId}`);
        setQuery('');
        setShowDropdown(false);
        dispatch(setFilter({ search: '' }));
    };

    


    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="container" ref={wrapperRef} style={{ position: "relative" }}>
            <div className="d-flex mb-4 position-relative">
                <IoIosSearch
                    size={24}
                    className="text-secondary"
                    style={{
                        position: "absolute",
                        right: "22px",
                        bottom: "6px",
                        zIndex: 1000,
                    }}
                />
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={query}
                    onChange={handleInputChange}
                    className="w-100 p-2 rounded-5 border-0 shadow-sm ps-3"
                />
            </div>

            {
                !pages ? query && data?.length > 0 && showDropdown && (
                <div
                    className="bg-white shadow-sm rounded-3 border position-absolute w-100"
                    style={{
                        zIndex: 999,
                        maxHeight: "250px",
                        overflowY: "auto",
                        left: "3px",
                        top: "50px",
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectProduct(item?._id)}
                            className="p-2 border-bottom text-secondary hover:bg-light d-flex justify-content-between px-4"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="d-flex flex-column">
                                <span>{item?.name}</span>
                                <small>{item.price} EGP</small>
                            </div>
                            <img
                                width={28}
                                height={25}
                                className="rounded-circle"
                                src={item?.imageCover}
                                alt=""
                            />
                        </div>
                    ))}
                </div> 
            ):''}

            {query && data?.length === 0 && showDropdown && (
                <div className="bg-white d-flex flex-column justify-content-center align-items-center shadow-sm rounded-3 border position-absolute w-100 text-muted p-2">
                        <p><HiOutlineShoppingBag size={30} color="#999" /></p>
                    <span>No products found.</span>
                </div>
            )}
            
        </div>
    );
};

export default SearchName;
