import React from 'react';
import './Card.css';
import pokemonImg from '../../images/pokemon.png';

const Card = (props) => {
    return (
        <div className='card'>
            <img 
                className='card-img' 
                src={``}
                alt={`Picture of ${props.name} pokemon`}
            />
            <div className='card-info'>
                <h3 className='card-title'>{props.name}</h3>
                <p className='card-status'>Caught</p>
            </div>
        </div>
    )
}

export default Card;