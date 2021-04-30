import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import { debounce, throttle } from '@sc/tools/function';
import { useApp } from '../../tools';
import Profile from './Profile';
import s from './header.css';

const $html = document.getElementsByTagName('html')[0];

const Header = ({ chapter, bar, children }) => {
    const { profile, course, updateCourse } = useApp(),
        pos = useRef({ id: null, chapter: null, top: 0 }),
        $bar = useRef();

    pos.current.id = profile?.last_course_id;
    pos.current.chapter = chapter;

    const savePosition = useCallback(
        debounce(() => {
            const { id, chapter: nextChapter, top } = pos.current;
            if (id && nextChapter) updateCourse(id, 'pos', { chapter: nextChapter, top });
        }, 500),
        []
    );

    const handleScroll = useCallback(
        throttle(() => {
            const width = (($html.scrollTop + window.innerHeight) / $html.scrollHeight) * 100;

            $bar.current.style.width = `${width}%`;
            pos.current.top = $html.scrollTop;
            savePosition();
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

    useEffect(() => {
        if (!chapter) window.scrollTo(0, 0);
        if (chapter && chapter === course?.pos?.chapter) window.scrollTo(0, course.pos.top);
    }, []);

    return (
        <div className={s.box}>
            {children}
            <Profile />
            <div ref={$bar} className={s.bar} />
        </div>
    );
};

Header.propTypes = {
    chapter: pt.number,
    bar: pt.bool
};

Header.defaultProps = {
    chapter: undefined,
    bar: true
};

export default Header;
