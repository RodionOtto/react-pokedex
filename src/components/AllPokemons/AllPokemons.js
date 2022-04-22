import React from 'react';
import './AllPokemons.css';
import Card from '../Card/Card';

const AllPokemons = (props) => {
    const fetchPokemons = () => {props.pokemons.then((pokemon) => {
        pokemon.results.map((item, id) => {
            console.log(item);
            return(
                    <Card
                        pokemon={item}
                        key={id}
                        id={item.id}
                        name={item.name}
                    />
                )
        }) 
    })}

    return(
        <div className='cards-grid'>
            {fetchPokemons()}
        </div>
    )
}

export default AllPokemons;