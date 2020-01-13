import React from 'react';

const PlayersList = () => {
     
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
            <ol>
                <li>
                    <div className="player-entry">
                        Baladur
                        <code className="level"> 77</code>
                    </div>
                </li>
                <li>
                    <div className="player-entry">
                        Baladur
                        <code className="level"> 77</code>
                    </div>
                </li>
                <li>
                    <div className="player-entry">
                        Baladur
                        <code className="level"> 77</code>
                    </div>
                </li>
                <li>
                    <div className="player-entry">
                        Baladur
                        <code className="level"> 77</code>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default PlayersList;