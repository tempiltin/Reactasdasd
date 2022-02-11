import React from 'react';
import features from '../assets/icon1.svg';

const Features = () => {
  return (
    <>
    <div className='features'>
               <div className='features-text'>How We Work</div>
          <div className='features-item'>

               <div className='features-info'>  
                    <div  className='features-imgs'><img src={features} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </div> 
                
               <div className='features-info'>  
                    <div  className='features-imgs'><img src={features} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </div> 
                
               <div className='features-info'>  
                    <div  className='features-imgs'><img src={features} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </div> 
        </div>     
    </div>
    </>
    );
};

export default Features;
