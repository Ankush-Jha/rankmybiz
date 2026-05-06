import React from "react";
import "./submit.css";

const SubmitSuccess = () => {
  return (
    <div className="submit-success">
      <div className="success-icon">✓</div>
      <h1>Review Posted!</h1>
      <p>Your feedback has been successfully submitted and is now live.</p>
    </div>
  );
};

export default SubmitSuccess;
