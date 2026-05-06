import React from "react";
import "./review.css"

const ReviewCard = () => {
    return(
        <div className="container">
            <h3 className="title">PICK A REVIEW</h3>
            <div className="card">
                <span className="tag">Fast Service</span>
                <p className="review">"The staff was efficient and friendly. Highly recommended for a quick stop."</p>
                <button className="select-btn">SELECTED</button>
            </div>
        </div>
    )
}
export default ReviewCard;