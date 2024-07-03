// import React from 'react'
// import  scrollToTop  from "./scrollToTop";
const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="banner">
            <div className="left">MUNCHIE FINDER</div>
            <div className="right">
              <p> Silver radiance, Sindhu Bhavan Marg, Ahmedabad </p>
              {/* <p> Ahmedabad </p> */}
              <p>Open: 08:00 AM - 11:00 PM</p>
            </div>
          </div>
          {/* <a href="#" onClick={scrollToTop}>Back to Top</a> */}
          {/* <div className="banner">
            <div className="left">
                <a href="#" onClick={scrollToTop}>Back to Top</a>
            </div>
          </div> */}
        </div>
      </footer>
    );
  };

export default Footer