import React from 'react';
import './App.css';
import firebase from './firebase';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';

firebase.firestore().collection('players').add({
  name: "Zoltan",
  level: 14
})

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
