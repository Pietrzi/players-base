import React from 'react';
import './App.css';
import firebase from './firebase';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';


function App() {
  return (
    <div className="App">
      <h1>Players</h1>
      <PlayersList />
      <AddPlayer />
    </div>
  );
}

export default App;
