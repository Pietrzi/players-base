import React, { useState } from 'react';
import firebase from '../firebase';

const AddPlayer = () => {

    const [name, setName] = useState('');
    const [level, setLevel] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        firebase
        .firestore()
        .collection('players')
        .add({
            name,
            level: parseInt(level)
        })
        .then(() => {
            setName('');
            setLevel('');
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Player</h4>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={ e => setName(e.currentTarget.value)} />
            </div>
            <div>
                <label>Level</label>
                <input type="number" value={level} onChange={ e => setLevel(e.currentTarget.value)}/>
            </div>
            <button>Add Player</button>
        </form>
    )
}

export default AddPlayer;