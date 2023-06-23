import React from 'react';
import './subs.css';
import img from '../../img/subs.png';
export const Subs = () => {
  return (
    <div className='subs-con'>
      <h1 className='subs-title'>
        Subscribe to get <br /> update vacancy post
      </h1>
      <div className='subs-flex'>
        <input
          placeholder='infomail856@gmail.com'
          className='subs-input'
          type='text'
        />
        <button className='subs-btn'>
          Subscribe
          <img src={img} alt='' />
        </button>
      </div>
    </div>
  );
};
