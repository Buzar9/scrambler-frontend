import React from 'react';
import { Link } from 'react-router-dom';

import './header.syles.scss';
import InfoDropdown from "../info-dropdown/info-dropdown.component";

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            HOME
        </Link>
        <div className='options'>
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
