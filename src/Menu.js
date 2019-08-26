import React from 'react';

import './menu.css';

export class Menu extends React.Component {

    render() {
        const {pokemons, selected, onSelectionChange} = this.props;

        return (
            <div className='menu'>
                {
                    pokemons.map(p => (
                        <div
                            key={p.name}
                            className={p === selected ? 'menu-item menu-item-active' : 'menu-item'}
                            onClick={() => onSelectionChange(p)}>
                            {p.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}
