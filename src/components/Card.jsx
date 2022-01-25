import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({song, id}) => {
  return <div className='card'>
    <img src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
    <div className="song-info">
        <h1>{song.song_name}</h1>
        <p>{song.artist}</p>
    </div>
    <button><Link to={`/song/${song.song_name}`} style={{ color: '#FFF' }}><i className="fas fa-play"></i></Link></button>
  </div>;
};

export default Card;
