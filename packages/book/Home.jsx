import React, { useEffect } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import { useApp } from './tools';

const Home = () => {
    const { profile, courses } = useApp(),
        [, , replace] = useLocationState();

    useEffect(() => {
        const course = courses[profile?.last_course_id];

        if (course) {
            // replace(`/${profile.last_course_id}/chapter-${course.pos.chapter}`, {
            //     top: course.pos.top
            // });
        }
    }, [profile, courses]);

    return (
        <div>
            <Link href='/en/chapter-1'>EN | Chapter 1</Link>
            <br />
            <Link href='/en/glossary'>EN | Glossary</Link>
            <br /> <br />
            <Link href='/ru/chapter-1'>RU | Chapter 1</Link>
            <br />
            <Link href='/ru/glossary'>RU | Glossary</Link>
        </div>
    );
};
export default Home;
