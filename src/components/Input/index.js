import React from 'react';
import './index.css';

function Input({
                   placeholder = 'Search...',
                   error,
                   value,
                   onChange,
                   onKeyPress,
                   type = 'text',
                   inputClassName = 'search-input'
               }) {
    return (
        <div className="input-content">
            <input
                className={inputClassName}
                type={type}
                value={value}
                onKeyPress={onKeyPress}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {error && <div>{error}</div>}
        </div>
    )
}

export default Input;