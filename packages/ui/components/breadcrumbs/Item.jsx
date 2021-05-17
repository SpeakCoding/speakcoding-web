import React from 'react';
import Icon from '../icon';
import s from './breadcrumbs.css';

const Item = ({ children }) => (
    <>
        <div className={s.item}>{children}</div>
        <span className={s.arrow}>
            <Icon name='chevron-right-large' size={16} />
        </span>
    </>
);

export default Item;
