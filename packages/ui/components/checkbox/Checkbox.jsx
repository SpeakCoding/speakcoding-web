import React from 'react';
import pt from 'prop-types';
import s from './checkbox.css';

const Checkbox = ({ disabled, name, value, onChange }) => {
    const handleToggleValue = event => {
        onChange(event.target.checked);
    };

    return (
        <label key={value} className={s.label}>
            <input
                type='checkbox'
                className={s.input}
                defaultChecked={value}
                disabled={disabled}
                name={name}
                onChange={handleToggleValue}
            />
            <div className={s.control} />
        </label>
    );
};

Checkbox.propTypes = {
    disabled: pt.bool,
    value: pt.bool,
    name: pt.string,
    onChange: pt.func
};

Checkbox.defaultProps = {
    disabled: false,
    value: false,
    name: undefined,
    onChange: () => {}
};

export default Checkbox;
