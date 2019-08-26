import React from 'react'

import './details.css'

export class Details extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            details: null,
            imageNumber: 0
        }
    }

    fetchPokemon = pokemon => {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(details => this.setState({details}));
    };

    componentDidMount() {
        const {pokemon} = this.props;
        this.fetchPokemon(pokemon);
    }

    componentDidUpdate(prevProps) {
        const {pokemon} = this.props;

        if (prevProps.pokemon !== pokemon) {
            this.fetchPokemon(pokemon);
        }
    }

    render() {
        const {details} = this.state;

        if (!details) {
            return <div>Loading ...</div>
        }

        return (
            <div className="pokemon-details">
                <h2>{details.name}</h2>
                <img src={details.sprites.front_default}/>
                <div className="property">
                    <span className='label'>id:</span>
                    <span className='value'>{details.id}</span>
                </div>
                <div className="property">
                    <span className='label'>types:</span>
                    <span className='value'> {
                        details.types
                            .map(t => t.type.name)
                            .join(', ')
                    }</span>
                </div>
                <div className="property">
                    <span className='label'>Size:</span>
                    <span className='value'>{details.height} * {details.height}</span>
                </div>
                <div className="property">
                    <span className='label'>Weight:</span>
                    <span className='value'>{details.weight}</span>
                </div>
            </div>
        )
    }
}
