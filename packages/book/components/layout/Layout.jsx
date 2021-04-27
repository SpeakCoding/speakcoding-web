import React, { useEffect, useRef, useState } from 'react';
import { Icon, Link } from '@sc/ui';
import { context } from './utils';
import s from './layout.css';

const Layout = ({ children }) => {
    const $menu = useRef(),
        [value, setValue] = useState({ $menu: null });

    useEffect(() => {
        setValue({ $menu: $menu.current });
    }, []);

    return (
        <div className={s.box}>
            <div className={s.content}>
                <context.Provider value={value}>{children}</context.Provider>
            </div>
            <div className={s.menu}>
                <Link href='/'>
                    <div className={s.logo} />
                </Link>
                <div ref={$menu} />
                <div className={s.help}>
                    <Icon name='lifebuoy' size={24} />
                </div>
            </div>
        </div>
    );
};

export default Layout;
