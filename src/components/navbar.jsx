import React from 'react'
import './navbar.css'

const Navbar = ({ step }) => {
  return (
    <div className='nav'>

      <h1>Step {step} out of 2</h1>
    </div>
  )
}

export default Navbar
