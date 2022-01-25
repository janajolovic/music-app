import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import './App.css';
import Card from "./components/Card";
import Song from "./components/Song";
import SongsList from "./components/SongsList";

function App() {

  const [songs, setSongs] = useState([
    {
      song_name: "Heathens",
      artist: "Twenty One Pilots",
    },
    {
      song_name: "Heathens",
      artist: "Twenty One Pilots",
    },
    {
      song_name: "Heathens",
      artist: "Twenty One Pilots",
    }
  ])
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SongsList songs={songs}/>}></Route>
        <Route path="/song" element={<Song />}></Route>
      </Routes>
    </div>
  );
}

export default App;
