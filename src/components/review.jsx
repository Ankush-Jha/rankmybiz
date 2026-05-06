import React from "react";
import "./review.css"

const ReviewCard = ({ reviewText }) => {
    return(
        <div className="container">
            <h3 className="title">AI MAGIC: CHOOSE YOUR REVIEW</h3>
            <div className="card">
                <span className="tag">AI Generated</span>
                <p className="review">
                    {reviewText || "Click a star rating above to generate an AI review!"}
                </p>
            </div>
        </div>
    )
}
export default ReviewCard;