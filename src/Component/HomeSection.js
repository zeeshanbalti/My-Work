// Home.js

import React, { useEffect, useState } from 'react';
import "./home.css"

const Home = () => {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftImage = document.getElementById('left-sliding-image');
      const rightImage = document.getElementById('right-sliding-image');
      const scrollPosition = window.scrollY + window.innerHeight;

      // Adjust the scroll threshold as needed
      const triggerPosition = leftImage.offsetTop + leftImage.offsetHeight / 2;

      if (scrollPosition > triggerPosition && !isVisible) {
        setIsVisible(true);
      } else if (scrollPosition <= triggerPosition && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);



  return (
    <div className="home-section">
      <div>
        <h1>Welcome to Our Website</h1>
      </div>
      <div delay={300}>
        <p>Explore and discover amazing things!</p>
      </div>
      <div className="image-container">
        <div className={`slider-container ${isVisible ? 'visible' : ''}`} left delay={600}>
          <img
          id="left-sliding-image"
           alt="Left Sliding Image"
          className="sliding-image left"
            src="https://tse1.mm.bing.net/th?id=OIP.IhGijgoVTEs0_4rPuUXboQHaE8&pid=Api&P=0&h=220"
           />
        </div>
        <div className={`slider-container ${isVisible ? 'visible' : ''}`} right delay={600}>
          <img
          id="right-sliding-image"
           alt="Right Sliding Image"
          className="sliding-image right"
            src="https://tse2.explicit.bing.net/th?id=OIP.2UkXc2vju2sxCzGbyMabAQHaEK&pid=Api&P=0&h=220"
           />
        </div>
      </div>
    </div>
  );
};

export default Home;
