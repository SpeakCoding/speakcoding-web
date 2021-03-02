/* eslint-disable react/button-has-type */
import React from 'react';
import pt from 'prop-types';
import s from './button.css';

const Button = ({ children, loading, type, variant, onClick }) => (
    <button className={s[variant]} disabled={loading} type={type} onClick={onClick}>
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
    loading: pt.bool,
    type: pt.oneOf(['button', 'submit']),
    variant: pt.oneOf(['default', 'text']),
    onClick: pt.func
};

Button.defaultProps = {
    loading: false,
    type: 'button',
    variant: 'default',
    onClick: () => {}
};

export default Button;
