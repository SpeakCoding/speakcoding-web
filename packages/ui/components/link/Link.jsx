import React from 'react';
import pt from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import s from './link.css';

const Link = ({ blank, href, children }) => {
    const simple = typeof href === 'string',
        external = simple && /^(https?|mailto|tel):/.test(href);

    if (external) {
        return (
            <a
                className={s.box}
                href={href}
                rel='noreferrer noopener'
                target={blank ? '_blank' : '_self'}
            >
                {children}
            </a>
        );
    }

    return (
        <RouterLink className={s.box} target={blank ? '_blank' : '_self'} to={href}>
            {children}
        </RouterLink>
    );
};

Link.propTypes = {
    blank: pt.bool,
    href: pt.string.isRequired
};

Link.defaultProps = {
    blank: false
};

export default Link;
