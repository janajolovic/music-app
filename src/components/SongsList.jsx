import React from 'react';
import Card from './Card';

const SongsList = ({songs}) => {
  return <div>
    {songs.map((song, i) => {
      return (
      <Card song={song} key={i}/>
    )})}
    </div>;
};

export default SongsList;
