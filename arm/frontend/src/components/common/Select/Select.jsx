import React from 'react';

import './select.css';

const Select = (props) => {
    const {
        name,
        label,
        value,
        optionList,
        handleChange,
        handleBlur,
        error,
        attention
    } = props;

    let layoutClassName = '';
    let selectClassName = 'select';

    if (error) {
        layoutClassName += 'select__layout_error';
        selectClassName += ' select__error';
    }

    if (attention) {
        selectClassName += ' select__attention';
    }

    const renderLabel = (label) &&
        <label htmlFor={name}>{label}</label>

    const renderError = (error) &&
        <span className="select__message_error">{error}</span>

    return (
        <div className={layoutClassName}>
            {renderLabel}
            <select onBlur={handleBlur} onChange={handleChange} value={value} className={selectClassName} id={name} name={name}>
                <option></option>
                {optionList.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)}
            </select>
            {renderError}
        </div>
    );
}

export default Select;