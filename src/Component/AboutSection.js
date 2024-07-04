// About.js

// import React from 'react'; 
import './about.css'; // Make sure to include your CSS file
import React, { useEffect, useState } from 'react';
 
const About = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById('sliding-image');
      const scrollPosition = window.scrollY + window.innerHeight;

      // Adjust the scroll threshold as needed
      const triggerPosition = image.offsetTop + image.offsetHeight / 2;

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

  const aboutPic = "https://tse3.mm.bing.net/th?id=OIP.TJO-CjFrXCs8_G_m2KEk5wHaE8&pid=Api&P=0&h=220"
  return (
    <div className="about-section">
      <div className='about-section-text'>
        <div className=''>
          <h2>About Me</h2>
        </div>
        <div delay={300}>
          <p>
          Hello It's me Zeeshan Baltistani 👋
           Hi there! I'm Zeeshan Baltistani, 
           a passionate and experienced frontend
            developer with a knack for creating 
            stunning and user-friendly websites 
            and web applications. With a strong 
            foundation in HTML, CSS, JavaScript,
             and modern frontend libraries like React,
              I'm dedicated to bringing your digital vision 
              to life.🌟
          </p>
        </div>
        <div delay={600}>
          <p>
            In my free time, I enjoy exploring new technologies and
            contributing to open-source projects. I believe in
            continuous learning and strive to stay updated with the
            latest trends in web development.
          </p>
        </div>
      </div>
      <div className={`slider-container ${isVisible ? 'visible' : ''}`}>
        <img 
        id="sliding-image"
        alt="Sliding Image"
        className="sliding-image"
        src={aboutPic} 
            />
      </div>
    </div>
  );
};

export default About;

// import React, { useEffect } from 'react';
// import { Link, Element } from 'react-scroll';
// const aboutPic = "https://tse3.mm.bing.net/th?id=OIP.TJO-CjFrXCs8_G_m2KEk5wHaE8&pid=Api&P=0&h=220"
// import './about.css'; // Make sure to include your CSS file
// import { animateScroll as scroll } from 'react-scroll';

// const AboutSection = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.getElementById('about-section');
//       const aboutSectionTop = aboutSection.offsetTop;
//       const scrollPosition = window.scrollY + window.innerHeight;

//       if (scrollPosition > aboutSectionTop) {
//         aboutSection.classList.add('fade-in');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <div>
//       <Element name="about-section" id="about-section">
//         <div className='about-section-text'>
//           <div>
//             <h2>About Me</h2>
//           </div>
//           <div>
//             <p>
//               I am a passionate developer with a love for creating
//               user-friendly and innovative web applications. My skills
//               include HTML, CSS, JavaScript, and React.
//             </p>
//           </div>
//           <div>
//             <p>
//               In my free time, I enjoy exploring new technologies and
//               contributing to open-source projects. I believe in
//               continuous learning and strive to stay updated with the
//               latest trends in web development.
//             </p>
//           </div>
//         </div>
//       </Element>
//       <Link to="about-section" smooth={true} duration={500}>
//         Scroll to About Me
//       </Link>
//       <div>
//         <img
//           src={aboutPic}
//           alt="image"
//           className='about-section-pic'
//         />
//       </div>
//       <button onClick={scrollToTop}>Scroll to Top</button>
//     </div>
//   );
// };

// export default AboutSection;
