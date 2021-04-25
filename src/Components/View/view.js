import { Card } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import{ useParams } from 'react-router-dom';
import AppContext from '../../AppContext/Context';
import './view.css';

const PokemonView = () => {
    const { setToPokedex } = useContext(AppContext);
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((r) => r.json())
        .then((resultPokemon) => {
            setToPokedex(resultPokemon);
            setPokemon(resultPokemon);
        });
    }, [name, setToPokedex]);

    if (!pokemon){
        return null;
    }

    return(
        <div className="content">
            <div className="PokemonView">
                <pageHeader onBack={}/>
                <Card title={pokemon.name}>
                
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                /> 
                
                <ul className="Pokeview abilities">
                <h1> Abilities </h1>
                    {pokemon.abilities.map((item) => (
                        <li className="li_abilities">{item.ability.name}</li>
                    ))}

                <h1> Type(s) </h1>
                    {pokemon.types.map((item) => (
                        <li>{item.type.name}</li>
                    ))}
                </ul>

                </Card>  
            </div>
        </div>
    )
}

export default PokemonView;