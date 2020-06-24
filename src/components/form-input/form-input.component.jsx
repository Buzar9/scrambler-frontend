import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div>
        <input onChange={handleChange} {...otherProps} />
        {label ? (
            <label>{label}</label>
        ) : null}
    </div>
);

export default FormInput;
