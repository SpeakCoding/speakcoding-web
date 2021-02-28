import React from 'react';
import s from './layout.css';

const Layout = ({ children }) => (
    <div className={s.box}>
        <div className={s.content}>{children}</div>
    </div>
);

export default Layout;
