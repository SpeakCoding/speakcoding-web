import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import s from './button.css';

const Button = ({ block, icon, size, variant, children, onClick }) => (
    <button
        className={classNames(s.box, s[size], s[variant], block && s.block)}
        type='button'
        onClick={onClick}
    >
        {icon && (
            <div className={s.icon}>
                <Icon name={icon} size={24} />
            </div>
        )}
        {children}
    </button>
);

Button.propTypes = {
    block: pt.bool,
    icon: pt.string,
    size: pt.oneOf(['default', 'small', 'large']),
    variant: pt.oneOf(['contained', 'rounded', 'white']),
    onClick: pt.func
};

Button.defaultProps = {
    block: false,
    icon: undefined,
    size: 'default',
    variant: 'contained',
    onClick: () => {}
};

export default Button;
