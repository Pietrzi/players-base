import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const sorting = {
    'level-asc': {column: 'level', direction: "asc"},
    'level-desc': {column: 'level', direction: "desc"},
    'player-asc': {column: 'name', direction: "asc"},
    'player-desc': {column: 'name', direction: "desc"}
}

const usePlayers = (sortBy = 'level-desc') => {
    const [players, setPlayers] = useState([])
    

    useEffect(() => {
        const unsubscribe = firebase
        .firestore()
        .collection('players')
        .orderBy(sorting[sortBy].column, sorting[sortBy].direction)
        .onSnapshot((snapshot) => {
            const newPlayers = snapshot.docs.map(el => ({
                id: el.id,
                ...el.data()
            }))
            setPlayers(newPlayers)
        })
        return () => unsubscribe();
    }, [sortBy])

    return players;
}

const PlayersList = () => {


    const [sortBy, setSortBy] = useState('level-desc');
    const players = usePlayers(sortBy); 

    return (
        <div>
            <h2>Players List</h2>
            <div>
                <label>Sort By</label>{" "}
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value="level-desc">From highest</option>
                    <option value="level-asc">From lowest</option>
                    <option disabled>---</option>
                    <option value="player-asc">Alphabetic from A-Z</option>
                    <option value="player-desc">Alphabetic from Z-A</option>
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