import React from 'react';
import pt from 'prop-types';
import { Hint, Link } from '@sc/ui';
import s from './glossary.css';

const Term = ({ data, link, href, children }) => {
    if (!data) return children;

    const { name, Definition } = data;

    return (
        <Hint>
            {children}
            <Hint.Tooltip>
                {name}: <Definition />
                {href && link && (
                    <div>
                        <Link href={href}>
                            <div className={s.link}>{link}</div>
                        </Link>
                    </div>
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
