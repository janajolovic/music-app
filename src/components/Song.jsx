import React from 'react';
import { useParams } from 'react-router-dom';

const Song = ({songs}) => {
    const song_name = useParams().name
    const current_song = songs.filter(song => song.song_name === song_name)[0];
    console.log(current_song);
    console.log(current_song.song_name)
  return <div className='song'>
      <img src="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
      <h1>{current_song.song_name}</h1>
      <p>{current_song.artist}</p>
      <div className="play">
          <button><i className="fas fa-play"></i></button>
      </div>
    </div>
};

export default Song;
