/* eslint-disable react/button-has-type */
import React from 'react';
import pt from 'prop-types';
import s from './button.css';

const Button = ({ children, type, variant, onClick }) => {
    return (
        <button className={s[variant]} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: pt.oneOf(['button', 'submit']),
    variant: pt.oneOf(['default', 'text']),
    onClick: pt.func
};

Button.defaultProps = {
    type: 'button',
    variant: 'default',
    onClick: () => {}
};

export default Button;
