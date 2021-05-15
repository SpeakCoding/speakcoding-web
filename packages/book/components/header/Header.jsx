import React, { useCallback, useEffect, useRef } from 'react';
import pt from 'prop-types';
import { debounce, throttle } from '@sc/tools/function';
import { useLocationState } from '@sc/ui/hooks';
import { useApp } from '../../tools';
import Profile from './Profile';
import s from './header.css';

const $html = document.getElementsByTagName('html')[0];

const Header = ({ chapter, children }) => {
    const { profile, updateProfile, courses, updateCourse } = useApp(),
        $bar = useRef(),
        [{ params }] = useLocationState({ path: '/:id' }),
        course = courses[params.id];

    const savePosition = useCallback(
        debounce(() => {
            if (params.id && chapter)
                updateCourse(params.id, 'pos', { chapter, top: $html.scrollTop });
        }, 500),
        []
    );

    const handleScroll = useCallback(
        throttle(() => {
            const width = (($html.scrollTop + window.innerHeight) / $html.scrollHeight) * 100;

            $bar.current.style.width = `${width}%`;
            savePosition();
        }, 25),
        []
    );

    useEffect(() => {
        if (typeof chapter !== 'number') return undefined;

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [chapter]);

    useEffect(() => {
        if (chapter && chapter === course?.pos?.chapter) window.scrollTo(0, course.pos.top);
        else window.scrollTo(0, 0);

        if (chapter && params.id !== profile.last_course_id)
            updateProfile({ last_course_id: params.id });
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
