import React from 'react';
import '../App.css';
import './FormInput.css';
function FormInput(props) {
    const {label, errorMessage, onChange, id, ...inputProps } = props;
    return(
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} required/>
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;