import React from 'react';
import pt from 'prop-types';
import s from './login.css';

const LoginButton = ({ children, ...props }) => (
    <button type='button' className={s.login} {...props}>
        {children}
    </button>
);

const Logo = ({ pic }) => <div className={s.icon} style={{ backgroundImage: `url(${pic})` }} />;

Logo.propTypes = {
    pic: pt.string.isRequired
};

LoginButton.Logo = Logo;

export default LoginButton;
