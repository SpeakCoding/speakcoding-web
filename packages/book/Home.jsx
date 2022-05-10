import { useEffect } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { useApp } from './tools';

const Home = () => {
    const { courses } = useApp(),
        [, navigate] = useLocationState();

    useEffect(() => {
        const lang = localStorage.getItem('lang'),
            n = courses[lang]?.pos?.chapter || 1;

        navigate(`/${lang}/chapter-${n}`, { replace: true });
    }, [courses]);

    return null;
};

export default Home;
