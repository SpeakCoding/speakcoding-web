import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import s from './navigation.css';

const Item = ({ href, children }) => {
    const [{ match }] = useLocationState({ path: href });

    if (!href) return <div className={classNames(s.item, s.text, s.disabled)}>{children}</div>;

    return (
        <div className={s.item}>
            <Link href={href}>
                <div className={classNames(s.text, match && s.active)}>{children}</div>
            </Link>
        </div>
    );
};

Item.propTypes = {
    href: pt.string
};

Item.defaultProps = {
    href: undefined
};

export default Item;
