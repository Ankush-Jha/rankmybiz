import React from 'react'
import './submit-btn.css'

const SubmitBtn = ({ onClick }) => {
  return (
    <div className='btnclass'>
      <button className='submitbtn' onClick={onClick}>COPY TO CLIPBOARD</button>
    </div>
  )
}

export default SubmitBtn
