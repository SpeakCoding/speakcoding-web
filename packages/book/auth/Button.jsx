import React from 'react';
import pt from 'prop-types';
import s from './login.css';

const LoginButton = ({ href, children, ...props }) => {
    if (href)
        return (
            <a className={s.login} href={href} rel='noreferrer noopener' {...props}>
                {children}
            </a>
        );

    return (
        <button type='button' className={s.login} {...props}>
            {children}
        </button>
    );
};

LoginButton.propTypes = {
    href: pt.string
};

LoginButton.defaultProps = {
    href: undefined
};

const Logo = ({ pic }) => <div className={s.icon} style={{ backgroundImage: `url(${pic})` }} />;

Logo.propTypes = {
    pic: pt.string.isRequired
};

LoginButton.Logo = Logo;

export default LoginButton;
