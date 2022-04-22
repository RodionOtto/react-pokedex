import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img 
                className='card-img' 
                src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
                alt={`Picture of ${props.name} pokemon`}
            />
            <div className='card-info'>
                <h3># {props.id}</h3>
                <h3 className='card-title'>{props.name}</h3>
                <p className='card-status'>Caught</p>
            </div>
        </div>
    )
}

export default Card;