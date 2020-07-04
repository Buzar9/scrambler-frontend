import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='input-group'>
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label>{label}</label>
        ) : null}
    </div>
);

export default FormInput;
