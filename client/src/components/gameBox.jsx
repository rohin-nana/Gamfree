import './gameBox.css'
import { useState } from 'react';


const GameBox = ({gameName, gameCost}) => {
    const [reveal, setReveal] = useState(false);
    const revealer = () => {
        reveal ? setReveal(false) : setReveal(true);
    }

    return (
        <div className='game-box'>
            {reveal ? <div className='game-reveal-open'>
                <div className='game-display'>
                    <h1 className='game-name'>{gameName}</h1>
                    <h2 className='game-price' style={{textDecorationLine: 'line-through'}}>{gameCost}</h2>
                    <h2>FREE</h2>
                </div>
            </div> : <div className='game-reveal-closed'>
                <button className='game-reveal-button' onClick={ revealer }>Reveal</button>
            </div>}
        </div>
    );
}
 
export default GameBox;