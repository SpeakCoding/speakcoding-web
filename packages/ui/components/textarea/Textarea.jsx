/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './textarea.css';

const autoGrow = $el => {
    $el.style.height = '5px';
    $el.style.height = `${$el.scrollHeight}px`;
};

const Textarea = ({
    autoheight,
    disabled,
    name,
    placeholder,
    pure,
    readonly,
    rows,
    value,
    variant,
    onChange
}) => {
    const $ref = useRef();

    const handleChange = useCallback(
        event => {
            if (autoheight) autoGrow(event.target);
            onChange(event.target.value, event);
        },
        [autoheight, onChange]
    );

    useEffect(() => {
        if (autoheight) autoGrow($ref.current);
    }, [autoheight, value]);

    return (
        <textarea
            ref={$ref}
            className={classNames(s.input, !pure && s.styled, s[variant])}
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
    autoheight: pt.bool,
    disabled: pt.bool,
    name: pt.string,
    placeholder: pt.string,
    pure: pt.bool,
    readonly: pt.bool,
    rows: pt.number,
    value: pt.string,
    variant: pt.oneOf(['default', 'bordered']),
    onChange: pt.func
};

Textarea.defaultProps = {
    autoheight: false,
    disabled: false,
    name: undefined,
    placeholder: undefined,
    pure: false,
    readonly: false,
    rows: 3,
    value: undefined,
    variant: 'default',
    onChange: () => {}
};

export default Textarea;
