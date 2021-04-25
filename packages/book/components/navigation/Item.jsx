import React from 'react';
import pt from 'prop-types';
import { Link } from '@sc/ui';
import s from './navigation.css';

const Item = ({ href, children }) => (
    <Link href={href}>
        <div className={s.item}>{children}</div>
    </Link>
);

Item.propTypes = {
    href: pt.string.isRequired
};

export default Item;
