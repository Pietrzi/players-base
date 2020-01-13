import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const usePlayers = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
        .firestore()
        .collection('players')
        .onSnapshot((snapshot) => {
            const newPlayers = snapshot.docs.map(el => ({
                id: el.id,
                ...el.data()
            }))
            setPlayers(newPlayers)
        })
        return () => unsubscribe();
    }, [])

    return players;
}

const PlayersList = () => {

    const players = usePlayers();
     
    return (
        <div>
            <h2>Players List</h2>
            <div>
                <label>Sort By</label>{" "}
                <select>
                    <option>From highest</option>
                    <option>From lowest</option>
                    <option disabled>---</option>
                    <option>Alphabetic from A-Z</option>
                    <option>Alphabetic from Z-A</option>
                </select>
            </div>
            <ol>{players.map(player =>
                <li key={player.id}>
                    <div className="player-entry">
                        {player.name}
                        <code className="level"> {player.level}</code>
                    </div>
                </li>
                )}
            </ol>
        </div>
    )
}

export default PlayersList;