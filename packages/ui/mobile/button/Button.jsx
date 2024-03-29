/* eslint-disable react/button-has-type */
import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './button.css';

const Button = ({ block, children, disabled, id, loading, size, type, variant, onClick }) => (
    <button
        className={classNames(s.box, s[variant], s[size], block && s.block)}
        disabled={disabled || loading}
        id={id}
        type={type}
        onClick={onClick}
    >
        {loading && (
            <div className={s.loader}>
                <svg width='100%' height='100%' viewBox='0 0 48 48'>
                    <circle r='21' cy='24' cx='24' className={s.circle} />
                </svg>
            </div>
        )}
        {!loading && children}
    </button>
);

Button.propTypes = {
    block: pt.bool,
    disabled: pt.bool,
    id: pt.string,
    loading: pt.bool,
    size: pt.oneOf(['medium', 'small']),
    type: pt.oneOf(['button', 'submit']),
    variant: pt.oneOf(['contained', 'outlined', 'text']),
    onClick: pt.func
};

Button.defaultProps = {
    block: false,
    disabled: false,
    id: undefined,
    loading: false,
    size: 'medium',
    type: 'button',
    variant: 'contained',
    onClick: () => {}
};

export default Button;
