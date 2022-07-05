import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt ="wipro logo"
            src ={process.env.PUBLIC_URL + '/images/wipro.jpg'} 
          />
        </div>
        <div className="card-name">
          <img
            alt ="Great Learning"
            src ={process.env.PUBLIC_URL + '/images/Great_Learning.jpg'} 
          />
        </div>
        {/* <div className="card-name">
          <img
            alt ="paypal"
            src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1920px-PayPal.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt ="express"
            src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/800px-American_Express_logo_%282018%29.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt ="discover"
            src ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/1920px-Discover_Card_logo.svg.png"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;