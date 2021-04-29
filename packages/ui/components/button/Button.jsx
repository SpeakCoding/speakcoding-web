import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import s from './button.css';

const Button = ({ icon, size, variant, children }) => (
    <button className={classNames(s.box, s[size], s[variant])} type='button'>
        {icon && (
            <div className={s.icon}>
                <Icon name={icon} size={24} />
            </div>
        )}
        {children}
    </button>
);

Button.propTypes = {
    icon: pt.string,
    size: pt.oneOf(['default', 'small']),
    variant: pt.oneOf(['contained', 'rounded', 'white'])
};

Button.defaultProps = {
    icon: undefined,
    size: 'default',
    variant: 'contained'
};

export default Button;
