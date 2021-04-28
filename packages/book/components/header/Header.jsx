import React, { useCallback, useEffect, useRef } from 'react';
import { throttle } from '@sc/tools/function';
import Profile from './Profile';
import s from './header.css';

const $html = document.getElementsByTagName('html')[0];

const Header = ({ children }) => {
    const $bar = useRef();

    const handleScroll = useCallback(
        throttle(() => {
            const width = (($html.scrollTop + window.innerHeight) / $html.scrollHeight) * 100;

            $bar.current.style.width = `${width}%`;
        }, 25),
        []
    );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={s.box}>
            {children}
            <Profile />
            <div ref={$bar} className={s.bar} />
        </div>
    );
};

export default Header;
