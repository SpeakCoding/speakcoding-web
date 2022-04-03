import React from 'react';
import s from './drawer.css';

const ScrollView = ({ children }) => (
    <div className={s.wrapper}>
        <div className={s.scroll}>{children}</div>
    </div>
);

export default ScrollView;
