import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import s from './radio.css';

const Radio = ({ value: initial, disabled, name, onChange }) => {
    const [value, setValue] = useState(initial),
        dirty = useRef(false);

    const handleToggleValue = event => {
        dirty.current = true;
        setValue(event.target.checked);
        onChange(event.target.checked);
    };

    useEffect(() => setValue(initial), [initial]);

    return (
        <label className={s.label}>
            <input
                type='radio'
                className={s.input}
                checked={value}
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
