import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import { debounce, throttle } from '@sc/tools/function';
import { useLocationState } from '@sc/ui/hooks';
import { useApp } from '../../tools';
import Profile from './profile';
import s from './header.css';

const $html = document.getElementsByTagName('html')[0];

const Header = ({ chapter, children }) => {
    const { profile, courses, updateCourse } = useApp(),
        $bar = useRef(),
        [{ params }] = useLocationState({ path: '/:id' }),
        course = courses[params.id];

    const savePosition = useCallback(
        debounce(() => {
            if (params.id && chapter)
                updateCourse(params.id, 'pos', { chapter, top: $html.scrollTop });
        }, 500),
        [updateCourse]
    );

    const handleScroll = useCallback(
        throttle(() => {
            if (!$bar.current) return;
            const width = (($html.scrollTop + window.innerHeight) / $html.scrollHeight) * 100;
            $bar.current.style.width = `${width}%`;
            savePosition();
        }, 25),
        [savePosition]
    );

    const init = async () => {
        const max = profile.group.last_chapter_number;
        if (chapter > max) {
            await updateCourse(params.id, 'pos', { chapter: max, top: 0 });
            window.location.href = '/';
        } else handleScroll();
    };

    useEffect(() => {
        if (typeof chapter !== 'number') return undefined;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [chapter, handleScroll]);

    useEffect(() => {
        if (chapter && chapter === course?.pos?.chapter) window.scrollTo(0, course.pos.top);
        else window.scrollTo(0, 0);
        if (typeof chapter === 'number') init();
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
    chapter: pt.number
};

Header.defaultProps = {
    chapter: undefined
};

export default Header;
