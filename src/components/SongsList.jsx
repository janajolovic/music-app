import React from 'react';
import Card from './Card';

const SongsList = ({songs}) => {
  return <div>
    {songs.map((song, i) => {
      <Card song={songs[i]}/>
      console.log(song)
    })}
    </div>;
};

export default SongsList;
