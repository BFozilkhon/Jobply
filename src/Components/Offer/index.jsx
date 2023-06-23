import React from 'react';
import './Offer.css';
import logo1 from '../../img/card-logo.png';
export const Offer = () => {
  return (
    <div className='off-con'>
      <h1 className='off-title'>Popular Job Posts</h1>
      <div className='off-box'>
        {/* card */}
        <div className='off-card'>
          <div className='off-sec'>
            <img src={logo1} alt='' />
            <span className='com-name'>Slack</span>
          </div>
          <h1 className='position'>Sr. Product Designer</h1>
          <p className='info'>Full Time - New York City</p>

          <button className='off-btn1'>Remote</button>
          <button className='off-btn1'>Anywhere</button>
          <span className='price'>$10k - $25k</span>
        </div>
        {/* card */}
        <div className='off-card'>
          <div className='off-sec'>
            <img src={logo1} alt='' />
            <span className='com-name'>Slack</span>
          </div>
          <h1 className='position'>Sr. Product Designer</h1>
          <p className='info'>Full Time - New York City</p>

          <button className='off-btn1'>Remote</button>
          <button className='off-btn1'>Anywhere</button>
          <span className='price'>$10k - $25k</span>
        </div>
        {/* card */}
        <div className='off-card'>
          <div className='off-sec'>
            <img src={logo1} alt='' />
            <span className='com-name'>Slack</span>
          </div>
          <h1 className='position'>Sr. Product Designer</h1>
          <p className='info'>Full Time - New York City</p>

          <button className='off-btn1'>Remote</button>
          <button className='off-btn1'>Anywhere</button>
          <span className='price'>$10k - $25k</span>
        </div>
      </div>
      <p className='all'>View All</p>
    </div>
  );
};
