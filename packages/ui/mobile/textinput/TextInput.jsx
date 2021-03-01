import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './textiniput.css';

const TextInput = ({ invalid, name, placeholder, required, type, value, onChange }) => {
    const handleChange = useCallback(
        event => {
            onChange(event.target.value);
        },
        [onChange]
    );

    return (
        <input
            autoCapitalize='off'
            autoComplete='off'
            autoCorrect='off'
            className={classNames(s.control, {
                [s.invalid]: invalid
            })}
            defaultValue={value}
            name={name}
            placeholder={placeholder}
            required={required}
            spellCheck={false}
            type={type}
            onChange={handleChange}
        />
    );
};

TextInput.propTypes = {
    invalid: pt.bool,
    name: pt.string,
    placeholder: pt.string,
    required: pt.bool,
    type: pt.oneOf(['text', 'password', 'email']),
    value: pt.string,
    onChange: pt.func
};

TextInput.defaultProps = {
    invalid: false,
    name: undefined,
    placeholder: '',
    required: false,
    type: 'text',
    value: '',
    onChange: () => {}
};

export default TextInput;
