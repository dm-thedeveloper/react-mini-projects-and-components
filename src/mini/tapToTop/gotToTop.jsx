import React, { useState, useEffect } from 'react';

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after 1.5vh of scroll
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 1.5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <div style={{ height: '1000vh', padding: '20px' }}>
      {/* Header */}
      <header style={{ height: '150vh', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <h1>Scroll Down</h1>
      </header>

      {/* Go to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
};

export default GotoTop;
