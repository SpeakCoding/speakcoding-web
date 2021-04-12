import React from 'react';
import s from './layout.css';

const Layout = ({ children }) => {
    return (
        <div className={s.box}>
            <div className={s.content}>{children}</div>
            <div className={s.menu}>
                <div className={s.logo} />
            </div>
        </div>
    );
};

export default Layout;
