import React, { useCallback } from 'react';
import pt from 'prop-types';
import { useAPI } from '../../tools';
import s from './layout.css';

const Layout = ({ reset, children }) => {
    const fetch = useAPI();

    const handleLogOut = useCallback(() => {
        fetch('/users/forget.json', { method: 'POST' });
        localStorage.removeItem('auth_token');
        reset();
    }, []);

    return (
        <div className={s.box}>
            <div className={s.content}>{children}</div>
            <div className={s.reset} onClick={handleLogOut} />
        </div>
    );
};

Layout.propTypes = {
    reset: pt.func.isRequired
};

export default Layout;
