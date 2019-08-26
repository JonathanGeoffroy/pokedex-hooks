import React from 'react';

import {Header} from './Header';
import {Menu} from './Menu';
import {Details} from './Details';

import './App.css';


export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selected: null
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => res.json())
            .then(pokemons => this.setState({
                pokemons: pokemons.results,
                selected: pokemons.results[0]
            }));
    }

    setSelection = selected => this.setState({selected});

    render() {
        const {pokemons, selected} = this.state;
        return (
            <>
                <Header name={selected ? selected.name : ''}/>
                <article>
                    <Menu pokemons={pokemons} selected={selected} onSelectionChange={this.setSelection}/>
                    {selected && <Details pokemon={selected}/>}
                </article>
            </>
        );
    }
}
