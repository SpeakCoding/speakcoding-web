import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { Icon, Link } from '@sc/ui';
import Logo from '../logo';
import Phone from '../../phone';
import { context } from './utils';
import s from './layout.css';

const Layout = ({ phone, children }) => {
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
                    <div className={s.logo}>
                        <Logo size={44} />
                    </div>
                </Link>
                <div ref={$menu} />
                <div className={s.help}>
                    <Icon name='lifebuoy' size={24} />
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    phone: pt.bool
};

Layout.defaultProps = {
    phone: true
};

export default Layout;
