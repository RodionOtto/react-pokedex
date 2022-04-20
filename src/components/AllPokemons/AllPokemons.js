import React from 'react';
import './AllPokemons.css';
import Card from '../Card/Card';

const AllPokemons = (props) => {
    return(
        <div className='cards-grid'>
            {props.pokemons.map((pokemon, id) => {
                return(
                    <Card
                        pokemon={pokemon}
                        key={pokemon.id}
                        id={id}
                    />
                )
            })}
        </div>
    )
}

export default AllPokemons;