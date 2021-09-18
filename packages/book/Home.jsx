import { useEffect } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { useApp } from './tools';

const Home = () => {
    const { courses } = useApp(),
        [{ params }, , replace] = useLocationState({ path: '/:lang' }),
        lang = params.lang || localStorage.getItem('lang');

    useEffect(() => {
        const course = courses[lang],
            n = course?.pos?.chapter || 1;

        localStorage.setItem('lang', lang);
        replace(`/${lang}/chapter-${n}`);
    }, [courses]);

    return null;
};

export default Home;
