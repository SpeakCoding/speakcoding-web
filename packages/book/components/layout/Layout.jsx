import React from 'react';
import { Link } from '@sc/ui';
import s from './layout.css';

const Layout = ({ children }) => (
    <div className={s.box}>
        <div className={s.content}>{children}</div>
        <div className={s.menu}>
            <Link href='/'>
                <div className={s.logo} />
            </Link>
        </div>
    </div>
);

export default Layout;
