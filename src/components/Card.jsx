import React from 'react';

const Card = ({song}) => {
  return <div className='card'>
    <img src="" />
    <h1>{song.song_name}</h1>
    <p>{song.artist}</p>
  </div>;
};

export default Card;
