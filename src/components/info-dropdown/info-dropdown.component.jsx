import React from 'react';

import './info-dropdown.styles.scss'

const InfoDropdown = ({ show, text, instruction }) => (
    <div className={show ? 'info-dropdown' : null}>
        <ul>
            <li> {text} </li>
            <li> {instruction} </li>
        </ul>
    </div>
);

export default InfoDropdown;
