import React from 'react';

import './menu.css';


const Menu = ({pokemons, selected, onSelectionChange}) => {

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
    );
};

export {Menu};
