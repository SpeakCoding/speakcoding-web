import { useEffect } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { useApp } from './tools';

const Home = () => {
    const { courses } = useApp(),
        [, , replace] = useLocationState();

    useEffect(() => {
        const lang = localStorage.getItem('lang'),
            n = courses[lang]?.pos?.chapter || 1;

        replace(`/${lang}/chapter-${n}`);
    }, [courses]);

    return null;
};

export default Home;
