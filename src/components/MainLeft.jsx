import React from 'react';
import img2 from "../img/img2.webp";
import { Link } from "react-router-dom";

function MainLeft() {
  return (
    <div className='mainleftContainer'>
      <div className='mainleft'>
        <div className='mainleftName'>
          <img
            src={img2} alt=''
          />
          <h2>Harshita</h2>
        </div>

        <div className='line' />

        <div className='recentrepo'>
          <div className='recentrepos'>
            <h2>Recent Repositories</h2>
            <button>New</button>
          </div>
          <div className='inputBox'>
            <input type='text' placeholder='Find a repository...' />
          </div>
          <div className="list">
            <h1><img src={img2} alt=''/> Harshita/Recipe-App</h1>
            <h1><img src={img2} alt=''/>Harshita/Weather-App</h1>
            <h1><img src={img2} alt=''/>Harshita/Flipkart-clone</h1>
            <h1><img src={img2} alt=''/>Harshita/PizzaDelivery-App</h1>
          </div>
          <Link to='/profile'>Show more</Link>
        </div>

        <div className='line' />

        <div className='recentRepo'>
          <div className='recentRepos'>
            <h2>Recent Activities</h2>
          </div>
          <p>Thanks for watching</p>
          </div>

        <div className='line' />

        <div className='recentRepo'>
          <div className='recentRepos'>
            <h2>Your Teams</h2>
          </div>
          <div className="inputBoxTwo">
            <input type='text' placeholder='Find a team...'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeft;
