import React from 'react'
import './submit-btn.css'

const SubmitBtn = ({ onClick }) => {
  return (
    <div className='btnclass'>
      <button className='submitbtn' onClick={onClick}>SUBMIT</button>
    </div>
  )
}

export default SubmitBtn
