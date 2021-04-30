import { useEffect } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { useApp } from './tools';

const Home = () => {
    const { profile, courses } = useApp(),
        [, , replace] = useLocationState();

    useEffect(() => {
        const course = courses[profile.last_course_id];

        if (profile.last_course_id) {
            const n = course?.pos?.chapter || 1;
            replace(`/${profile.last_course_id}/chapter-${n}`);
        }
    }, [profile, courses]);

    return null;
};
export default Home;
