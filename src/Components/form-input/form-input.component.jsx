import React from 'react';
import './form-input.styles.css';

const FormInput = ({ label, ...otherInputProps }) => (
    <div className='group'>
        <input 
            className='form-input' 
            type="text"
            onChange={otherInputProps.handleChange} 
            {...otherInputProps}
        />
        {
            label ? 
            (<label className={
                `${otherInputProps.value.length ? 'shrink' : ''
            } form-input-label`}>
                {label}
            </label>) : 
            null}
    </div>
);

export default FormInput;