import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdOutlineRateReview } from "react-icons/md";
import images from '../../assets/offers.jpg';

const ReviewsDetails = () => {
    const ratings = [
        { star: 5, percentage: 90 },
        { star: 4, percentage: 60 },
        { star: 3, percentage: 40 },
        { star: 2, percentage: 30 },
        { star: 1, percentage: 0 },
    ];
    const reviews = [
        {
            name: "Rachel Patel",
            date: "October 5, 2023",
            rating: 5,
            text: "Couldn't resist buying this watch after seeing it online, and I'm so glad I did. It's even more stunning in person, and the build quality is exceptional. Will definitely be purchasing from this brand again!",
            avatarColor: "bg-primary"
        },
        {
            name: "Christopher Lee",
            date: "June 25, 2023",
            rating: 4.5,
            text: "Really impressed with the quality and style of this watch. It’s exactly what I was looking for – versatile, durable, and looks great with any outfit. Docked half a star because the clasp is a bit tricky to open, but otherwise, it’s perfect!",
            avatarColor: "bg-purple"
        }
    ];

    return (
        <>
          <div className="container  pt-1">
    <div className="row">
        {/* عمود التقييمات */}
        <div className="col-lg-4 col-sm-12">
            <h4 >Average Rating</h4>
            <div className='border rounded-4 p-2 mt-3 shadow-sm'>
                <div className="d-flex ps-2 align-items-center">
                    <span className='me-2'>4.5</span>
                    <div>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <p style={{ fontSize: '12px' }}>200 Reviews</p>
                    </div>
                </div>

                <div className="ms-2" style={{ maxWidth: '400px' }}>
                    {ratings.map((item) => (
                        <div className="row align-items-center mb-1 " key={item.star}>
                            <div className="col-1 pe-0">
                                <strong>{item.star}</strong>
                            </div>
                            <div className="col-9 px-2">
                                <div className="progress" style={{ height: '8px', backgroundColor: '#f1f1f1' }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${item.percentage}%`, backgroundColor: '#ffd200' }}
                                        aria-valuenow={item.percentage}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="col-2 ps-0">
                                <span>{item.percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='ms-2 '>
                    <span>Write your Review</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illo sunt rem optio neque impedit?</p>
                    <button
                        style={{
                            backgroundColor: '#ED4D2B',
                            background: 'linear-gradient(to right, #f7971e, #ffd200)',
                            border: 'none',
                            color: 'white',
                            padding: '8px 20px',
                            borderRadius: '12px',
                            fontWeight: '500',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                        }}>
                        <MdOutlineRateReview className='me-2' />
                        Add Review
                    </button>
                </div>
            </div>
        </div>

        {/* عمود الريفيوهات */}
        <div className="col-lg-8 col-sm-12 mt-3 mt-sm-1">
            <h4>Customer Feedback</h4>
            {reviews.map((rev, index) => (
                <div className='border rounded-4 p-3 mt-3 shadow-sm' key={index}>
                    <div className='d-flex justify-content-between'>
                        <div className="d-flex">
                            <img src={images} className='rounded-circle' width={50} alt="" />
                            <div className='d-flex flex-column ms-3'>
                                <span className='fw-bold'>{rev.name}</span>
                                <small>{rev.date}</small>
                            </div>
                        </div>

                        <div className="text-end">
                            <span>{rev.rating}</span>
                            <FaStar className='ms-1 text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            {/* ممكن تضيف نصف نجمة لو عاوز */}
                        </div>
                    </div>

                    <p className='mt-2 mb-0'>
                        {rev.text}
                    </p>
                </div>
            ))}
        </div>
    </div>
</div>

        </>
    )
}

export default ReviewsDetails