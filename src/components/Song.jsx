import React from 'react';

const Song = ({song}) => {
  return <div className='song'>
      <img src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        {console.log(song)}
  </div>;
};

export default Song;
