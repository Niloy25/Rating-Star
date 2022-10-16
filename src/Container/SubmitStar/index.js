import React, { useState } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa"

const SubmitStar = () => {
    const [number, setNumber] = useState(0)
    const [hoverStar, setHoverStar] = useState(undefined);

    console.log(number);

    return (
        <div>{
            Array.from({ length: 5 }, (_, index) =>
            (<span key={index}>
                {number >= index + 1 || hoverStar >= index + 1 ?
                    <FaStar
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: "orange" }}
                        onClick={() => setNumber(index + 1)}
                    />
                    :
                    <FaRegStar
                        onMouseOver={() => !number && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: "orange" }}
                        onClick={() => setNumber(index + 1)}
                    />}
            </span>
            ))
        }
        </div>
    )
}

export default SubmitStar