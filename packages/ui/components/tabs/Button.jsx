import React, { useContext } from 'react';
import pt from 'prop-types';
import Tag from '../tag';
import { context } from './utils';
import s from './tabs.css';

const Button = ({ value, children }) => {
    const { tab, setTab } = useContext(context);

    return (
        <div className={s.button} onClick={() => setTab(value)}>
            <Tag color={tab === value ? 'primary' : 'grey'}>{children}</Tag>
        </div>
    );
};

Button.propTypes = {
    value: pt.string.isRequired
};

export default Button;
