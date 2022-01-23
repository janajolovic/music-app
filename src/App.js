import React from "react";
import { useState } from "react/cjs/react.development";
import './App.css';
import Card from "./components/Card";

function App() {

  const [songs, setSongs] = useState([
    {
      song_name: "Heathens",
      artist: "Twenty One Pilots",
      img: "./images/download.jpg"
    }
  ])
  return (
    <div className="app">
      <Card song={songs[0]}/>
      <Card song={songs[0]}/>
    </div>
  );
}

export default App;
