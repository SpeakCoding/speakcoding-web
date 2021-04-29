import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import { throttle } from '@sc/tools/function';
import Profile from './Profile';
import s from './header.css';

const $html = document.getElementsByTagName('html')[0];

const Header = ({ bar, children }) => {
    const $bar = useRef();

    const handleScroll = useCallback(
        throttle(() => {
            const width = (($html.scrollTop + window.innerHeight) / $html.scrollHeight) * 100;

            $bar.current.style.width = `${width}%`;
        }, 25),
        []
    );

    useEffect(() => {
        if (!bar) return undefined;

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [bar]);

    return (
        <div className={s.box}>
            {children}
            <Profile />
            <div ref={$bar} className={s.bar} />
        </div>
    );
};

Header.propTypes = {
    bar: pt.bool
};

Header.defaultProps = {
    bar: true
};

export default Header;
