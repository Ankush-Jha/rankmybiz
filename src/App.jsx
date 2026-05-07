import { useState } from 'react'
import { GoogleGenAI } from '@google/genai';
import Navbar from './components/navbar'
import Rating from './components/Rating'
import ReviewCard from './components/review'
import SubmitSuccess from './components/submit'
import './App.css'
import SubmitBtn from './components/submit-btn'

const ai = new GoogleGenAI({ apiKey: "" });
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [review, setReview] = useState("");

  const handleRating = async (stars) => {
    setReview("Generating...");
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Write a short 1-sentence review for a ${stars} star experience, it should be SEO firendly content for Ginnis restaurant, and be positive always`,
      });
      setReview(res.text);
    } catch (error) {
      setReview("AI is experiencing high demand. Please click the star again!");
    }
  };

  const handleCopy = () => {
    if (review && review !== "Generating..." && review !== "sorry yaar. API crash hogya") {
      navigator.clipboard.writeText(review);
      setIsSubmitted(true);
    } else {
      alert("bhai pehle review toh generate krle");
    }
  };

  return (
    <div className="App">
      <Navbar step = {isSubmitted ? 2 : 1}/>
      {isSubmitted ? <SubmitSuccess /> : (
        <>
          <Rating onRate={handleRating} />
          <ReviewCard reviewText={review} />
          <SubmitBtn onClick={handleCopy} />
        </>
      )}
    </div>
  )
}

export default App
