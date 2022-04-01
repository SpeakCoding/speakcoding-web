import React, { useContext } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { item } from './utils';
import s from './accordion.css';

const Arrow = () => {
    const { name, expanded } = useContext(item);

    return (
        <div className={classNames(s.icon, name === expanded && s.expanded)}>
            <Icon name='chevron-right' size={24} />
        </div>
    );
};

export default Arrow;
