import { useState } from "react";
import "../style.css";

const Testmonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(testimonials.length - 1);
  };

  const handleNextClick = () => {
    if (currentIndex !== testimonials.length - 1)
      setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};
export default Testmonials;
