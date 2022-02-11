import React from 'react';

const Header = () => {
  return (
  <>
    <div className='header' >
        <div className='header-logo' >Logo</div>
        <ul className='header-item'>
          <li>Home</li>
          <li className=''>About</li>
          <li>Service</li>
          <li className=''>Rewievs</li>
        </ul>
          <button className='header-btn'>Get Started</button>

    </div>
  </>
  );
};

export default Header;
