import React from 'react';
import community from '../assets/community.png';

const Community = () => {
  return (
    <>
     <div className="community"> 
     <div className='community-item-img'>
                <img src={community} alt='community' />
    </div>
     <div className="community-item">
          <div className='community-p'> Community</div>
          <div className='community-text'>Platform Dedicated To Promoting</div>
          <div className='community-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis ultrices  consectetur adipiscing elit. fringilla quisque pulvinar. </div>
          <div><button className='community-btn'> What we do?  </button>  </div>
      </div>      
     </div>
     
     </>
 );
};

export default Community;
