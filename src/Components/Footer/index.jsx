import React from 'react';
import './Footer.css';
import icons from '../../img/icons.png';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-box1'>
        <h1 className='logo'>JOBPLY</h1>
        <p>152/3 , Western Road, New York</p>
        <p className='number'>Call Us: +99-8569-5234</p>
        <img className='footer-img' src={icons} alt='' />
      </div>
      <div className='footer-box2'>
        <p className='footer-items b'>Explore</p>
        <p className='footer-items'> Featured Job</p>
        <p className='footer-items'>Recent Job Post</p>
        <p className='footer-items'>Total Candidates</p>
        <p className='footer-items'>Support</p>
      </div>
      <div className='footer-box2'>
        <p className='footer-items b'>Useful Link</p>
        <p className='footer-items'> About Us</p>
        <p className='footer-items'>Blog</p>
        <p className='footer-items'>Company</p>
        <p className='footer-items'>Contact Us</p>
      </div>
      <div className='footer-box1'>
        <p className='footer-items b'>Latest News</p>
        <p className='footer-items'>New Positions</p>
        <p className='footer-items'>About Companies</p>
        <p className='footer-items'>Price</p>
        <p className='footer-items'>Subscribe</p>
      </div>
    </div>
  );
};
