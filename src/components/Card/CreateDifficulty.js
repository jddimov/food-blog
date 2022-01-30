import React from 'react';
import { FaRegStar, FaStar  } from "react-icons/fa";

function CreateDifficulty(numberOfStars) {
    if (numberOfStars == 1) {
        return <div>
        
                    <FaStar      style={{ height: "20px", width: "20px" }} />
                    <FaRegStar   style={{ height: "20px", width: "20px" }} />
                    <FaRegStar   style={{ height: "20px", width: "20px" }} />
                </div>
    } else if (numberOfStars == 2) {
        return <div>
        
                    <FaStar      style={{ height: "20px", width: "20px" }} />
                    <FaStar      style={{ height: "20px", width: "20px" }} />
                    <FaRegStar   style={{ height: "20px", width: "20px" }} />
                </div>
    } else if (numberOfStars == 3) {
        return <div>
        
                    <FaStar      style={{ height: "20px", width: "20px" }} />
                    <FaStar      style={{ height: "20px", width: "20px" }} />
                    <FaStar      style={{ height: "20px", width: "20px" }} />
                </div>
    } else return <div>error</div>
    ;
}

export default CreateDifficulty;
