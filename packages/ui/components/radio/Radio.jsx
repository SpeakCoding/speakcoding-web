import React from 'react';
import pt from 'prop-types';
import s from './radio.css';

const Radio = ({ disabled, name, value, onChange }) => {
    const handleToggleValue = event => {
        onChange(event.target.checked, event);
    };

    return (
        <label key={value} className={s.label}>
            <input
                type='radio'
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

Radio.propTypes = {
    disabled: pt.bool,
    name: pt.string,
    value: pt.bool,
    onChange: pt.func
};

Radio.defaultProps = {
    disabled: false,
    name: undefined,
    value: false,
    onChange: () => {}
};

export default Radio;
