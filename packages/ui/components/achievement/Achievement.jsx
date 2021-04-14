import React from 'react';
import s from './achievement.css';

const Achievement = ({ children }) => (
    <div className={s.box}>
        <div className={s.icon} />
        <div className={s.content}>{children}</div>
    </div>
);

export default Achievement;
