import React from 'react';

const AddPlayer = () => {

    return (
        <form>
            <h4>Add Player</h4>
            <div>
                <label>Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Name</label>
                <input type="number" />
            </div>
            <button>Add Player</button>
        </form>
    )
}

export default AddPlayer;