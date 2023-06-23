import React from 'react';
import './about.css';
import rasm from '../../img/about.png';
import icon1 from '../../img/search.png';
import icon2 from '../../img/location.png';
export const About = () => {
  return (
    <div className='about-con'>
      <div className='box1'>
        <h1 className='title'>Find & Apply For Your Dream Job</h1>
        <p className='descr'>
          The website is chockablock with useful features, allowing you to
          efficiently search and apply for roles across all sectors, experience
          levels and locations.
        </p>

        <div className='input-box'>
          <div className='input-sec'>
            <img src={icon1} alt='' />
            <input
              placeholder='Job title'
              className='input-search'
              type='text'
            />
          </div>
          |
          <div className='input-sec'>
            <img src={icon2} alt='' />
            <input
              placeholder='Location'
              className='input-search'
              type='text'
            />
          </div>
          <button className='input-btn'>Search</button>
        </div>
      </div>
      <div className='box2'>
        <img src={rasm} alt='' />
      </div>
    </div>
  );
};
