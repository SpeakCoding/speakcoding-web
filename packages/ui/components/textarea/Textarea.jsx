import React, { useCallback } from 'react';
import pt from 'prop-types';
import s from './textarea.css';

const Textarea = ({ disabled, name, placeholder, readonly, rows, value, onChange }) => {
    const handleChange = useCallback(
        event => {
            onChange(event.target.value, event);
        },
        [onChange]
    );

    return (
        <textarea
            key={value}
            className={s.input}
            defaultValue={value}
            disabled={disabled}
            name={name}
            placeholder={placeholder}
            readOnly={readonly}
            rows={rows}
            onChange={handleChange}
        />
    );
};
Textarea.propTypes = {
    disabled: pt.bool,
    name: pt.string,
    placeholder: pt.string,
    readonly: pt.bool,
    rows: pt.number,
    value: pt.string,
    onChange: pt.func
};

Textarea.defaultProps = {
    disabled: false,
    name: undefined,
    placeholder: undefined,
    readonly: false,
    rows: 3,
    value: undefined,
    onChange: () => {}
};

export default Textarea;
