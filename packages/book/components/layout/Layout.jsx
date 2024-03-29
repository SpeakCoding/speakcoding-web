import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { Icon, Link } from '@sc/ui';
import Logo from '../logo';
import { Phone } from '../../phone';
import GlossaryLink from './GlossaryLink';
import MobilePlaceholder from './MobilePlaceholder';
import Tutorial from './tutorial';
import { context } from './utils';
import s from './layout.css';

const Layout = ({ phone, children }) => {
    const $menu = useRef(),
        [value, setValue] = useState({ $menu: null });

    useEffect(() => {
        setValue({ $menu: $menu.current });
    }, []);

    return (
        <>
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

                    <GlossaryLink />

                    <Link href='mailto:team@speakcoding.co' blank>
                        <div className={s.help}>
                            <Icon name='lifebuoy' size={24} />
                        </div>
                    </Link>
                </div>

                {phone && <Phone />}
            </div>
            <MobilePlaceholder />
            <Tutorial />
        </>
    );
};

Layout.propTypes = {
    phone: pt.bool
};

Layout.defaultProps = {
    phone: true
};

export default Layout;
