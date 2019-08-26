import React from 'react';

import './header.css';

const Header = ({name}) => (
    <div className='header'>
        <h1>Hello {name}!</h1>
    </div>
);

export {Header};
