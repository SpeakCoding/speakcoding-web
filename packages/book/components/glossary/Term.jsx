import React, { useEffect, useMemo } from 'react';
import pt from 'prop-types';
import { useLocationState } from '@sc/ui/hooks';
import { Hint, Link } from '@sc/ui';
import s from './glossary.css';

const cache = {};

const Term = ({ data, link, href, children }) => {
    const [{ pathname }] = useLocationState();

    if (!cache[pathname]) cache[pathname] = {};

    const displayAsLink = useMemo(() => {
        const key = `@@${data.id}`;

        if (!data?.id) return undefined;
        if (cache[pathname][key]) return true;

        cache[pathname][key] = true;

        return false;
    }, [data?.id]);

    useEffect(
        () => () => {
            delete cache[pathname];
        },
        [pathname]
    );

    if (!data) return children;

    const { Definition } = data;

    if (displayAsLink)
        return (
            <Link href={href}>
                <span className={s.simple}>{children}</span>
            </Link>
        );

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
