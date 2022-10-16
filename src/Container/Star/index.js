import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import './style.css'

const Star = ({ stars, reviews }) => {
    console.log('Star:', stars, 'Reviews:', reviews);
    const ratingStar = Array.from({ length: 5 }, (elm, index) => {
        let number = index + 0.5
        return (
                <span key={index}>
                    {
                        stars >= index + 1
                            ? <FaStar className='icon' />
                            : stars >= number
                                ? <FaStarHalfAlt className='icon' />
                                : <FaRegStar className='icon' />
                    }
                </span>
        )
    })
    return (
        <div className="icon-style">
            {ratingStar}
            <p>({reviews})</p>
        </div>
    )
}

export default Star