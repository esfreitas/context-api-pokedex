import React, { useContext, useEffect, useState } from 'react';
import{ Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import AppContext from '../../AppContext/Context';
import './list.css';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState(null);
    const { user } = useContext(AppContext);
    const [page, setPage] = useState(0);
    

    function next(){
        if(page <= 1080) {
            setPage(page + 20);
            console.log(page);   
        }  
        if(page > 1080) {
            console.log("fim da lista"); 
        } 
        
     };
 
     function previus(){
        if(page >= 20) {
            setPage(page - 20);
            console.log(page);   
        }  
        if(page < 20) {
            console.log("fim da lista"); 
        } 
     };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
        .then((r) => r.json())
        .then((json) => {
            setPokemon(json.results);
        });
    }, [page]);

    if (!pokemon){
        return null;
    }

    return(
       <div>
            <button onClick={previus}>Previous</button><button onClick={next}>Next</button>
            <ul className="PokemonList">
                    {pokemon.map(({ name }) => (
                        <li key={name}>
                            <Link to={`/pokemon/${name}`}>
                                {name}
                                {(user && !user.pokedex[name]) && (
                                    <span className="pokemonList_label">Novo</span>
                                )}
                                
                            </Link>
                        </li>
                ))}
                </ul>                
        </div>
    );

};

    export default PokemonList;