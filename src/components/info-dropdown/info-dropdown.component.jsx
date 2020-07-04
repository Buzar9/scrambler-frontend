import React from 'react';

import './info-dropdown.styles.scss'
import Button from "../button/button.component";

const InfoDropdown = ({ show, text, instruction }) => (
    <div className={show ? 'info-dropdown' : null}>
        <ul>
            <li> {text} </li>
            <li> {instruction} </li>
        </ul>
    </div>
);

export default InfoDropdown;
