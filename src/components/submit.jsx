import React from "react";
import "./submit.css";

const SubmitSuccess = () => {
  return (
    <div className="submit-success">
      <div className="success-icon">✔</div>
      <h1>Copied!</h1>
      <p>The review has been copied to your clipboard. You can now paste it on Google Maps.</p>
    </div>
  );
};

export default SubmitSuccess;
