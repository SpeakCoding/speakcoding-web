import React, { useCallback } from 'react';
import s from './layout.css';
import { useApp } from '../../tools';

const Layout = ({ children }) => {
    const { reset } = useApp();

    const handleReset = useCallback(() => {
        if (window.confirm('Are you sure you want to log out?')) reset();
    }, []);

    return (
        <div className={s.box} data-control='device'>
            <div id='mobile-layout' className={s.content}>
                {children}
            </div>
            <div className={s.reset} onClick={handleReset} />
        </div>
    );
};

export default Layout;
