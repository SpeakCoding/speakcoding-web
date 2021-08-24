import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import s from './checkbox.css';

const Checkbox = ({ value: initial, disabled, onChange }) => {
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
                type='checkbox'
                className={s.checkbox}
                checked={value}
                disabled={disabled}
                onChange={handleToggleValue}
            />
            <div className={s.control} />
        </label>
    );
};

Checkbox.propTypes = {
    disabled: pt.bool,
    value: pt.bool,
    onChange: pt.func
};

Checkbox.defaultProps = {
    disabled: false,
    value: false,
    onChange: () => {}
};

export default Checkbox;
