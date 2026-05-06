import { useState } from 'react'
import Navbar from './components/navbar'
import Rating from './components/Rating'
import ReviewCard from './components/review'
import SubmitSuccess from './components/submit'

import './App.css'
import SubmitBtn from './components/submit-btn'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="App">
      <Navbar />
      {isSubmitted ? (
        <SubmitSuccess />
      ) : (
        <>
          <Rating />
          <ReviewCard />
          <SubmitBtn onClick={() => setIsSubmitted(true)} />
        </>
      )}
    </div>
  )
}

export default App
