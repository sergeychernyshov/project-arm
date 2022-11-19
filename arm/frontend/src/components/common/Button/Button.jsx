import React from 'react';

import './button.css'

const Button = ({value, onClick}) => {
    return (
        <div>
            <button className="button" onClick={onClick} type="submit">{value}</button>
        </div>
    );
}

export default Button;