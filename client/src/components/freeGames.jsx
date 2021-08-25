import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './freeGames.css';
import Gamebox from './gameBox.jsx';

const FreeGames = () => {
    const [apiData, setData] = useState([]);

    const getData = () => {
        Axios.get('http://100.26.238.48:3001/api/retrieve').then((response)=> {
            setData(response.data);
        });
    };

    useEffect(()=> {
        getData();
    }, []);

    const games = apiData.filter(item => item.Game_Name);
    const gamesCount = games.length;

    return (
        <div className='display'>
            <div className='header'>
                We found {gamesCount} games that are currently free
            </div>
            <div>
                {apiData.map((item) =>
                    <div key={item.Game_Name}>{<Gamebox gameName = {item.Game_Name} gameCost = {item.Game_Cost}/>}</div>
                )}
            </div>
        </div>
    );
}

export default FreeGames;