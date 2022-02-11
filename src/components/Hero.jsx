import React from 'react';
import heroimg from '../assets/Image.svg';

const Hero = () => {
  return (
      <>
        <div className='hero'>
            <div className='hero-item'>
                <div className='hero-blue-text'>Smart Buissnes</div>
                <div className='hero-title-text'>Connecting people is our 
                <span className='hero-blue-text'> buissnes</span>
                </div>
                <div className='hero-description-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tenetur accusamus, consectetur eius error nam?
                </div>
                <div className='hero-btn-group'>
                    <button className='hero-btn'>Get Started</button>
                    <button className='hero-btn-outline'>Play Video</button>
                </div>
            </div>
            <div className='hero-item-img'>
                <img src={heroimg} alt='hero-img' />
            </div>
        </div>
      </>
  );
};

export default Hero;
