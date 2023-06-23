import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='container'>
      <h1 className='logo'>JOBPLY</h1>
      <div className='nav-sec'>
        <p className='items'>Home</p>
        <p className='items'>Categories</p>
        <p className='items'>Service</p>
        <p className='items'>Jobs</p>
      </div>
      <button className='btn'>Apply Jobs</button>
    </div>
  );
};
