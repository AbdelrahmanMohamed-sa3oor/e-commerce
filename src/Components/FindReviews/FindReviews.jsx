import { FaStar } from "react-icons/fa";

const FindReviews = () => {
    const stars = Array.from({ length: 5 }); // هنلف 5 مرات

    return (
        <div className="container mt-3">
            <span className="text-secondary">Reviews</span>
            <ul className="list-unstyled">
                {stars.map((_, index) => (
               <div className="d-flex " key={index}>
                 <input type="radio" name="" id="" className="m-2"/>
                    <li key={index}>
                        {Array.from({ length: index + 1 }).map((_, i) => (
                            <span key={i} className="text-warning">
                                <FaStar />
                            </span>
                        ))}
                    </li>
               </div>
                ))}
            </ul>
        </div>
    );
}

export default FindReviews;
