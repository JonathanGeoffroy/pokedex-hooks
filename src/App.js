import React, {useState, useEffect} from 'react';

import {Header} from './Header';
import {Menu} from './Menu';
import {Details} from './Details';

import './App.css';


const App = () => {
        const [pokemons, setPokemons] = useState([]);
        const [selected, setSelected] = useState(null);

        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
                .then(res => res.json())
                .then(pokemons => {
                    setPokemons(pokemons.results);
                    setSelected(pokemons.results[0]);
                })
        }, []);

        return (
            <>
                <Header name={selected ? selected.name : ''}/>
                <article>
                    <Menu pokemons={pokemons} selected={selected} onSelectionChange={setSelected}/>
                    {selected && <Details pokemon={selected}/>}
                </article>
            </>
        );
    }
;

export default App;
