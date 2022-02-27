import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import s from './button.css';

const Button = ({ block, color, disabled, icon, size, variant, children, onClick }) => (
    <button
        className={classNames(s.box, s[color], s[size], s[variant], block && s.block)}
        disabled={disabled}
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
    color: pt.oneOf(['yellow', 'black']),
    disabled: pt.bool,
    icon: pt.string,
    size: pt.oneOf(['default', 'large']),
    variant: pt.oneOf(['contained', 'outlined', 'rounded', 'arrow', 'text']),
    onClick: pt.func
};

Button.defaultProps = {
    block: false,
    color: 'yellow',
    disabled: false,
    icon: undefined,
    size: 'default',
    variant: 'contained',
    onClick: () => {}
};

export default Button;
