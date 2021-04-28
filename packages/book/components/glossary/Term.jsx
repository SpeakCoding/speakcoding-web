import React from 'react';
import pt from 'prop-types';
import { Hint, Link } from '@sc/ui';
import s from './glossary.css';

const Term = ({ data, link, href, children }) => {
    if (!data) return children;

    const { Definition } = data;

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
};

Term.propTypes = {
    data: pt.object.isRequired,
    href: pt.string,
    link: pt.string
};

Term.defaultProps = {
    href: undefined,
    link: undefined
};

export default Term;
