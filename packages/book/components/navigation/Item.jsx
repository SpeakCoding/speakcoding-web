import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Link } from '@sc/ui';
import s from './navigation.css';

const Item = ({ href, children }) => {
    if (!href) return <div className={classNames(s.item, s.text, s.disabled)}>{children}</div>;

    return (
        <div className={s.item}>
            <Link href={href}>
                <div className={s.text}>{children}</div>
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
