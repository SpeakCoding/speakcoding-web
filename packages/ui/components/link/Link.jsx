import React from 'react';
import pt from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import s from './link.css';

const RouterHashLink = props => <HashLink {...props} smooth />;

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

    const hasHash = simple ? href.indexOf('#') > -1 : !!href.hash,
        LinkComponent = hasHash ? RouterHashLink : RouterLink;

    return (
        <LinkComponent className={s.box} target={blank ? '_blank' : '_self'} to={href}>
            {children}
        </LinkComponent>
    );
};

Link.propTypes = {
    blank: pt.bool,
    href: pt.oneOfType([pt.string, pt.object]).isRequired
};

Link.defaultProps = {
    blank: false
};

export default Link;
