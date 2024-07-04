import React, { useEffect, useState , } from 'react';
import './portfolio.css';
// import pic from '../Component/Pic/web-developer.png'

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.getElementById('portfolio-section');
      const scrollPosition = window.scrollY + window.innerHeight;

      // Adjust the scroll threshold as needed
      const triggerPosition = portfolioSection.offsetTop + portfolioSection.offsetHeight / 2;

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
    <div id="portfolio-section" className={`portfolio-section ${isVisible ? 'visible' : ''}`}>
      <h2>My Projects</h2>
      <div className="portfolio-cards">
        <div className="card left">
          <h3>Blog App</h3>
          <a href='https://zeeshanblogapp.netlify.app/'>Click here</a>
        </div>
        <div className="card right">
          <h3>SMIL Website</h3>
          <a href='https://smitweb-by-zeeshan.netlify.app/'>Click here (Continue)</a>
        </div>
      </div>
      <div className="portfolio-cards">
        <div className="card left">
          <h3>TextUtile</h3>
          <a href="https://react-firsttext-project.netlify.app/">Click here</a>
          {/* <p>Description of Project 3 goes here.</p> */}
        </div>
        <div className="card right">
          <h3>Weather App</h3>
          <a href='https://inspiring-paprenjak-cb91a0.netlify.app/'>Click here</a>
        </div>
      </div>

      <div id="resume" className="cardA">
  <img src="https://tse2.explicit.bing.net/th?id=OIP.PHRs__7VEjnILnw5u9y0HQHaEK&pid=Api&P=0&h=220" alt="Your Photo" />
  <h1>Zeeshan Haider</h1>
  <p>Front-end Developer</p>
  <a href="" target="_blank">
    View Resume
  </a>
</div>
    </div>
  );
};

export default PortfolioSection;
