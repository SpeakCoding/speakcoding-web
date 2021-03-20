import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import Icon from '../../components/icon';
import s from './textiniput.css';

const TextInput = ({
    icon,
    invalid,
    name,
    placeholder,
    required,
    type,
    value,
    variant,
    onChange
}) => {
    const handleChange = useCallback(
        event => {
            onChange(event.target.value);
        },
        [onChange]
    );

    return (
        <div
            className={classNames(s.box, s[variant], {
                [s.invalid]: invalid
            })}
        >
            {icon && (
                <div className={s.icon}>
                    <Icon name={icon} size={16} />
                </div>
            )}
            <input
                autoCapitalize='off'
                autoComplete='off'
                autoCorrect='off'
                className={s.control}
                defaultValue={value}
                name={name}
                placeholder={placeholder}
                required={required}
                spellCheck={false}
                type={type}
                onChange={handleChange}
            />
        </div>
    );
};

TextInput.propTypes = {
    icon: pt.string,
    invalid: pt.bool,
    name: pt.string,
    placeholder: pt.string,
    required: pt.bool,
    type: pt.oneOf(['text', 'password', 'email']),
    value: pt.string,
    variant: pt.oneOf(['default', 'ios']),
    onChange: pt.func
};

TextInput.defaultProps = {
    icon: undefined,
    invalid: false,
    name: undefined,
    placeholder: '',
    required: false,
    type: 'text',
    value: '',
    variant: 'default',
    onChange: () => {}
};

export default TextInput;
