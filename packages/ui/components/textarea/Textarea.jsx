/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './textarea.css';

const autoGrow = $el => {
    $el.style.height = '5px';
    $el.style.height = `${$el.scrollHeight + 2}px`; // 2 x 1px borders
};

const Textarea = ({
    autoheight,
    disabled,
    name,
    placeholder,
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
            className={classNames(s.input, s[variant])}
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
    readonly: false,
    rows: 3,
    value: undefined,
    variant: 'default',
    onChange: () => {}
};

export default Textarea;
