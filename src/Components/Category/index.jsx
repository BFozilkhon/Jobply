import React from 'react';
import './category.css';
import bank from '../../img/cat-rasm.png';
export const Category = () => {
  return (
    <div className='cat-con'>
      <h1 className='cat-title'>Job Categories</h1>
      <div className='cat-box'>
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        {/*  */}
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        {/*  */}
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        {/*  */}
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        {/*  */}
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        {/*  */}
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
        {/*  */}
        <div className='cat-card'>
          <div className='cirlce'>
            <img src={bank} alt='' />
          </div>
          <h1 className='cat-header'>Accouting & Finance</h1>
          <p className='cat-descr'>125 Job Vacancy</p>
        </div>
      </div>
    </div>
  );
};
