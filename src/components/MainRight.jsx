import React from 'react'
import img1 from "../img/img1.png";
import { Link } from "react-router-dom";

function MainRight() {
  return (
    <div className='mainright'>
      <div className="mainrightContainer">
        <div className="mainrightText">
          <h2>Following</h2>
          <h2>For You</h2>
        </div>
        </div>

        <div className="lineTwo">
          <div className="box">
            <h2>
              Welcome ... This is GitHub clone with React.js, Sass and React Router 
            </h2>
            <p>
              Follow me on <span>Youtube</span>, <span>Twitter</span> and {""} <span>Instagram</span>
            </p>
            <button className='btn'>
              <Link to="/profile">GitHub Clone</Link>
            </button>
          </div>
        <div className="boxCenter">
          <div className="boxCenterFirst">
            <p>
              On my channel there are videos with <span>React</span>,<span> Next.js</span>,<span> TailWind Css</span> Html and Css
            </p>
          </div>
          <div className="boxCenterFirst">
            
           <p>Follow me on LinkedIn</p>
          </div>
        </div>
        <div className="footer">
          <div className="footerFirst">
              <img src={img1} alt=''/>  
            <h4>GitHub CLone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>GitHub Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
              </div>
            <div className="footerSecondInside">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>

          </div>
        </div>
      <div className="lineTwo" />
        </div>
     
    
    </div>
  )
}

export default MainRight
