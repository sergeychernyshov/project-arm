import React from 'react';

import './input.css';
 
const Input = (props) => {
    const {
        type,
        name,
        label,
        placeholder,
        value,
        refs,
        handleChange,
        handleBlur,
        handleOnDoubleClick,
        handleOnKeyPress,
        error,
        info,
        disabled
    } = props;

    let layoutClassName = '';
    let inputClassName = 'input';

    if (error) {
        layoutClassName += 'input__layout_error';
        inputClassName += ' input__error';
    }

    const renderLabel = (label) &&
        <label htmlFor={name}>{label}</label>

    const renderError = (error) &&
        <span className="input__message">{error}</span>
    
    const renderInfo = (info) &&
        <span className="input__message">{info}</span>

    const renderDisabled = (disabled) && 'disabled'; 

    return (
        <div className={layoutClassName} onDoubleClick={handleOnDoubleClick}>
            {renderLabel}
            <input onChange={handleChange} onBlur={handleBlur} onKeyPress={handleOnKeyPress} value={value} ref={refs} placeholder={placeholder} className={inputClassName} id={name} name={name} type={type} autoComplete="off" disabled={renderDisabled} />
            {renderError}
            {renderInfo}
        </div>
    );
}

export default Input;