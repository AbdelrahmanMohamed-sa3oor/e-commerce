
import { IoIosSearch } from "react-icons/io";
const SearchName = () => {
    return (
        <>
            <div className='container' style={{ position: "relative" }}>
                {/* <span className='text-secondary'>Filter </span> */}
                <div className="d-flex  mb-4" >
                    <IoIosSearch size={24} className="text-secondary"
                    style={{ position: "absolute", right:'22px',bottom:'6px',zIndex: 1000 }}/>
                    <input type="text" placeholder="Search by Name"
                     className="w-100 p-2 rounded-5 border-0 shadow-sm ps-3"/>
                </div>
            </div>
        </>
    )
}

export default SearchName