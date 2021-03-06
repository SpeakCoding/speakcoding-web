import React from 'react';
import s from './scrollview.css';

const ScrollView = ({ children }) => (
    <div className={s.box}>
        <div className={s.scroll}>{children}</div>
    </div>
);

export default ScrollView;
