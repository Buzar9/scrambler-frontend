import React from 'react';

import './info-dropdown.styles.scss'

const InfoDropdown = ({ text, show }) => (
    <div className={show ? 'info-dropdown' : null}>
        <span> {text} </span>
    </div>
);

export default InfoDropdown;
