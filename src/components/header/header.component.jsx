import React from 'react';
import { Link } from 'react-router-dom';

import './header.syles.scss';

const Header = () => (
    <div className='header'>
        <Link className='home' to='/'>
            HOME
        </Link>
        <div className='option-group'>
            <Link className='option' to='/pangram'>
                PANGRAM
            </Link>
            <Link className='option' to='/mors'>
                MORS
            </Link>
            <Link className='option' to='/sylabic'>
                SYLABIC
            </Link>
        </div>
    </div>
);

export default Header;
