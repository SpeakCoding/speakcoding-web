import React from 'react';
import pt from 'prop-types';
import { Hint, Link } from '@sc/ui';
import s from './glossary.css';

const Term = ({ data, href, link, tooltip, children }) => {
    if (!data) return children;

    const { Definition } = data;

    if (tooltip)
        return (
            <Hint>
                {children}
                <Hint.Tooltip>
                    <div className={s.tooltip}>
                        <Definition />
                    </div>
                    {href && link && (
                        <Link href={href}>
                            <div className={s.link}>{link}</div>
                        </Link>
                    )}
                </Hint.Tooltip>
            </Hint>
        );

    return (
        <span>
            <Link href={href}>
                <span className={s.simple}>{children}</span>
            </Link>
        </span>
    );
};

Term.propTypes = {
    data: pt.object.isRequired,
    href: pt.string,
    link: pt.string,
    tooltip: pt.bool
};

Term.defaultProps = {
    href: undefined,
    link: undefined,
    tooltip: false
};

export default Term;
