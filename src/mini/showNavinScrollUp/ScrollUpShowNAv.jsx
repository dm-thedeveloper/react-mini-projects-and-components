import React, { useState, useEffect } from "react";
// import Nav from './ScrollUpShowNAv';

const Nav = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {    

    const currentScrollY = window.scrollY;
    console.log(currentScrollY);
    
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <h1>My Navbar</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="content">
 <p>
 <p>{'Lorem ipsum '.repeat(4000)}</p>
 </p>
      </div>


      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: #333;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: top 0.3s;
          z-index: 1000;
        }

        .navbar.hide {
          top: -100px;
        }

        .navbar.show {
          top: 0;
        }

        .navbar ul {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        .navbar li {
          cursor: pointer;
        }

        .content {
          padding-top: 80px;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .navbar ul {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;

