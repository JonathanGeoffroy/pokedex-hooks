import React, {useState, useEffect} from 'react'

import './details.css'

const Details = ({pokemon}) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(setDetails);
    }, [pokemon]);

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
};

export {Details};
